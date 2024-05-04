import { Employee } from "../interfaces/employeeInterface";
import { employeeMatchesQuery } from "./search/searchQuery";
import { TableRow } from "./table/TableRow";

interface EmployeesTableProps {
  employees: Employee[];
  searchQuery: string;
}
export const EmployeesTable = ({
  employees,
  searchQuery,
}: EmployeesTableProps) => {
  const filteredEmployees = employees.filter((employee) =>
    employeeMatchesQuery(employee, searchQuery)
  );

  const matchesFound = filteredEmployees.length > 0;

  return (
    <div>
      <div className="employee-table">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">First Name</th>
              <th className="table-header">Last Name</th>
              <th className="table-header">Start Date</th>
              <th className="table-header">Department</th>
              <th className="table-header">Date of Birth</th>
              <th className="table-header">Street</th>
              <th className="table-header">City</th>
              <th className="table-header">State</th>
              <th className="table-header">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {matchesFound ? (
              filteredEmployees.map((employee: Employee, index: number) => (
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
