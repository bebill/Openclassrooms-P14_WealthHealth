import { TableCell } from "./TableCell";
import { Employee } from "../../interfaces/employeeInterface";
import { states } from "../../data/statesData";

interface RowProps {
  employee: Employee;
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

export const TableRow = ({ employee }: RowProps) => {
  const formattedBirthDate = formatDate(employee.birthDate);
  const formattedStartDate = formatDate(employee.startDate);
  const formattedState =
    states.find((state) => state.name === employee.address.state)
      ?.abbreviation || employee.address.state;

  return (
    <tr key={employee.lastName + employee.firstName}>
      <TableCell value={employee.firstName} />
      <TableCell value={employee.lastName} />
      <TableCell value={formattedStartDate} />
      <TableCell value={employee.department} />
      <TableCell value={formattedBirthDate} />
      <TableCell value={employee.address.street} />
      <TableCell value={employee.address.city} />
      <TableCell value={formattedState} />
      <TableCell value={employee.address.zip} />
    </tr>
  );
};
