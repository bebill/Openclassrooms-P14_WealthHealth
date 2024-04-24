import { Employee } from "../interfaces/employeeInterface";
import { TableRow } from "./table/TableRow";

interface EmployeesTableProps {
  employees: Employee[];
}
export const EmployeesTable = ({ employees }: EmployeesTableProps) => {
  return (
    <div>
      <div className="employee-table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee) => (
              <TableRow
                key={employee.lastName + employee.firstName}
                employee={employee}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
