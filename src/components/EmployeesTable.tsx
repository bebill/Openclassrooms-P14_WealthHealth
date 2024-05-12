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
