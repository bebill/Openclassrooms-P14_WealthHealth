import { useEffect, useState } from "react";
import { Employee } from "../interfaces/employeeInterface";
import { TableHeader, tableHeaders } from "./table/TableHeader";
import { TableRow } from "./table/TableRow";
import { sortAndFilterEmployees } from "./sortEmployees";
import { employeeMatchesQuery } from "./search/searchQuery";

interface EmployeesTableProps {
  employees: Employee[];
  searchQuery: string;
  entryQuery: number;
  paginationQuery: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const EmployeesTable = ({
  employees,
  searchQuery,
  entryQuery,
  paginationQuery,
  currentPage,
}: EmployeesTableProps) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "original">(
    "original"
  );
  const [sortedEmployees, setSortedEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    let sortedEmployeesCopy = [...employees];

    if (sortOrder !== "original") {
      sortedEmployeesCopy = sortAndFilterEmployees(
        sortedEmployeesCopy,
        sortedColumn,
        sortOrder,
        searchQuery
      );
    }

    if (searchQuery) {
      sortedEmployeesCopy = sortedEmployeesCopy.filter((employee) =>
        employeeMatchesQuery(employee, searchQuery)
      );
    }

    setSortedEmployees(sortedEmployeesCopy);
  }, [employees, searchQuery, sortedColumn, sortOrder, entryQuery]);

  const handleSort = (header: string) => {
    if (header === sortedColumn) {
      setSortOrder((prevSortOrder) =>
        prevSortOrder === "asc"
          ? "desc"
          : prevSortOrder === "desc"
          ? "original"
          : "asc"
      );
    } else {
      setSortedColumn(header);
      setSortOrder("asc");
    }
  };

  const startIndex = (currentPage - 1) * paginationQuery;
  const displayedEmployees = sortedEmployees.slice(
    startIndex,
    startIndex + paginationQuery
  );
  const matchesFound = sortedEmployees.length > 0;

  return (
    <div>
      <div className="employee-table">
        <table className="table">
          <TableHeader
            headers={tableHeaders}
            onSort={handleSort}
            sortOrder={sortOrder}
            sortedColumn={sortedColumn}
          />
          <tbody>
            {matchesFound ? (
              displayedEmployees.map((employee: Employee, index: number) => (
                <TableRow key={index} employee={employee} />
              ))
            ) : (
              <tr>
                <td className="table-cell-no-record" colSpan={9}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// FONCTIONNE !!!!!!!!! //
// import { useEffect, useState } from "react";
// import { Employee } from "../interfaces/employeeInterface";
// import { TableHeader, tableHeaders } from "./table/TableHeader";
// import { TableRow } from "./table/TableRow";
// import { sortAndFilterEmployees } from "./sortEmployees";
// import { employeeMatchesQuery } from "./search/searchQuery";

// interface EmployeesTableProps {
//   employees: Employee[];
//   searchQuery: string;
// }

// export const EmployeesTable = ({
//   employees,
//   searchQuery,
// }: EmployeesTableProps) => {
//   const [sortedColumn, setSortedColumn] = useState<string | null>(null);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "original">(
//     "original"
//   );
//   const [sortedEmployees, setSortedEmployees] = useState<Employee[]>([]);

//   useEffect(() => {
//     let sortedEmployeesCopy = [...employees];

//     if (sortOrder !== "original") {
//       sortedEmployeesCopy = sortAndFilterEmployees(
//         sortedEmployeesCopy,
//         sortedColumn,
//         sortOrder,
//         searchQuery
//       );
//     }

//     if (searchQuery) {
//       sortedEmployeesCopy = sortedEmployeesCopy.filter((employee) =>
//         employeeMatchesQuery(employee, searchQuery)
//       );
//     }

//     setSortedEmployees(sortedEmployeesCopy);
//   }, [employees, searchQuery, sortedColumn, sortOrder]);

//   const handleSort = (header: string) => {
//     if (header === sortedColumn) {
//       setSortOrder((prevSortOrder) =>
//         prevSortOrder === "asc"
//           ? "desc"
//           : prevSortOrder === "desc"
//           ? "original"
//           : "asc"
//       );
//     } else {
//       setSortedColumn(header);
//       setSortOrder("asc");
//     }
//   };

//   const matchesFound = sortedEmployees.length > 0;

//   return (
//     <div>
//       <div className="employee-table">
//         <table className="table">
//           <TableHeader
//             headers={tableHeaders}
//             onSort={handleSort}
//             sortOrder={sortOrder}
//             sortedColumn={sortedColumn}
//           />
//           <tbody>
//             {matchesFound ? (
//               sortedEmployees.map((employee: Employee, index: number) => (
//                 <TableRow key={index} employee={employee} />
//               ))
//             ) : (
//               <tr>
//                 <td className="table-cell-no-record" colSpan={9}>
//                   No matching records found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// FIN //

// import { useState } from "react";
// import { Employee } from "../interfaces/employeeInterface";
// import { employeeMatchesQuery } from "./search/searchQuery";
// import { TableRow } from "./table/TableRow";
// import { SortButton } from "./SortButton";
// import { useSelector } from "react-redux";
// import { selectEmployees } from "../redux/utils/selectors";
// import { TableHeader, tableHeaders } from "./table/TableHeader";

// interface EmployeesTableProps {
//   employees: Employee[];
//   searchQuery: string;
// }
// export const EmployeesTable = ({
//   employees,
//   searchQuery,
// }: EmployeesTableProps) => {
//   const employeesData = useSelector(selectEmployees); // Récupère tous les employés
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "original">(
//     "original"
//   );

//   // Faire le tri AVANT de faire la pagination
//   const sortEmployeesByFirstName = (
//     employees: Employee[], //Il faut que ça soit TOUS LES EMPLOYES
//     order: "asc" | "desc" | "original"
//   ) => {
//     const sortedEmployees = [...employees]; // Le tableau rendu doit contenir tous les employés et non pas les employés affichés
//     console.log("sorted employees", sortedEmployees);
//     sortedEmployees.sort((a, b) => {
//       if (order === "asc") {
//         return a.firstName.localeCompare(b.firstName);
//       } else if (order === "desc") {
//         return b.firstName.localeCompare(a.firstName);
//       } else {
//         return 0;
//       }
//     });
//     return sortedEmployees;
//   };

//   const handleSort = () => {
//     if (sortOrder === "asc") {
//       setSortOrder("desc");
//     } else if (sortOrder === "desc") {
//       setSortOrder("original");
//     } else {
//       setSortOrder("asc");
//     }
//   };

// const sortedEmployees = sortEmployeesByFirstName(employeesData, sortOrder); //Ici, employees de sortedEployees doit faire partie du tableau entier

//   const filteredEmployees = employees.filter((employee) =>
//     employeeMatchesQuery(employee, searchQuery)
//   );

//   const matchesFound = filteredEmployees.length > 0;

//   return (
//     <div>
//       <div className="employee-table">
//         <table className="table">
//           <thead>
//             <tr>
//               <th className="table-header">
//                 <SortButton
//                   label="First Name"
//                   onClick={handleSort}
//                   sortOrder={sortOrder}
//                 />
//               </th>
//               <th className="table-header">Last Name</th>
//               <th className="table-header">Start Date</th>
//               <th className="table-header">Department</th>
//               <th className="table-header">Date of Birth</th>
//               <th className="table-header">Street</th>
//               <th className="table-header">City</th>
//               <th className="table-header">State</th>
//               <th className="table-header">Zip Code</th>
//             </tr>
//           </thead>
//           <tbody>
//             {matchesFound ? (
//               sortedEmployees.map((employee: Employee, index: number) => (
//                 <TableRow key={index} employee={employee} />
//               ))
//             ) : (
//               <tr>
//                 <td className="table-cell-no-record" colSpan={9}>
//                   No matching records found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
