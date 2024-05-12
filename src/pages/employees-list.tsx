import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/utils/selectors";
import { EmployeesTable } from "../components/EmployeesTable";
import { SearchBar } from "../components/SearchBar";
import { EntriesSelector } from "../components/EntriesSelector";
import { employeeMatchesQuery } from "../components/search/searchQuery";

export const EmployeesList = () => {
  const employeesData = useSelector(selectEmployees);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalFilteredEntries, setTotalFilteredEntries] = useState<number>(
    employeesData.length
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleEntriesPerPageChange = (value: number) => {
    setEntriesPerPage(value);
  };
  useEffect(() => {
    const filteredEmployees = employeesData.filter((employee: any) =>
      employeeMatchesQuery(employee, searchQuery)
    );
    setTotalFilteredEntries(filteredEmployees.length);
  }, [employeesData, searchQuery]);

  return (
    <main className="employees-list-page">
      <div className="employees-list-container">
        <h2 className="employees-list-heading">Current Employees</h2>
        <div className="employees-list-functionalities">
          <EntriesSelector onChange={handleEntriesPerPageChange} />
          <SearchBar onSearch={handleSearch} />
        </div>
        <EmployeesTable
          employees={employeesData}
          searchQuery={searchQuery}
          entryQuery={entriesPerPage}
        />
        <p>Total filtered employees: {totalFilteredEntries}</p>
      </div>
    </main>
  );
};

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectEmployees } from "../redux/utils/selectors";
// import { EmployeesTable } from "../components/EmployeesTable";
// import { SearchBar } from "../components/SearchBar";
// import { EntriesSelector } from "../components/EntriesSelector";
// import { employeeMatchesQuery } from "../components/search/searchQuery";
// import { Pagination } from "../components/Pagination";

// export const EmployeesList = () => {
//   const employeesData = useSelector(selectEmployees);
//   const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalFilteredEntries, setTotalFilteredEntries] = useState<number>(
//     employeesData.length
//   );

//   useEffect(() => {
//     console.log("Fetched employees:", employeesData);
//     const filteredEmployees = employeesData.filter((employee: any) =>
//       employeeMatchesQuery(employee, searchQuery)
//     );
//     setTotalFilteredEntries(filteredEmployees.length);
//   }, [employeesData, searchQuery]);

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     setCurrentPage(1);
//   };

//   const handleEntriesPerPageChange = (value: number) => {
//     setEntriesPerPage(value);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = employeesData
//     .filter((employee: any) => employeeMatchesQuery(employee, searchQuery))
//     .slice(indexOfFirstEntry, indexOfLastEntry);

//   return (
//     <main className="employees-list-page">
//       <div className="employees-list-container">
//         <h2 className="employees-list-heading">Current Employees</h2>
//         <div className="employees-list-functionalities">
//           <EntriesSelector onChange={handleEntriesPerPageChange} />
//           <SearchBar onSearch={handleSearch} />
//         </div>
//         <EmployeesTable employees={currentEntries} searchQuery={searchQuery} />
//         <Pagination
//           entriesPerPage={entriesPerPage}
//           totalEntries={totalFilteredEntries}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </main>
//   );
// };
