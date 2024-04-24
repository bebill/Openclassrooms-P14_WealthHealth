import { Employee } from "../interfaces/employeeInterface";
import { TableRow } from "./table/TableRow";

interface EmployeesTableProps {
  employees: Employee[];
}
export const EmployeesTable = ({ employees }: EmployeesTableProps) => {
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
