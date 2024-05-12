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

const formatName = (name: string) => {
  const parts = name.split(/([\s-])/);

  const formattedParts = parts.map((part) => {
    if (part !== "-" && part.trim() !== "") {
      return part.charAt(0).toUpperCase() + part.slice(1);
    } else {
      return part;
    }
  });
  return formattedParts.join("");
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const TableRow = ({ employee }: RowProps) => {
  const formattedFirstName = formatName(employee.firstName);
  const formattedLastName = formatName(employee.lastName);
  const formattedBirthDate = formatDate(employee.birthDate);
  const formattedStartDate = formatDate(employee.startDate);
  const formattedState =
    states.find((state) => state.name === employee.address.state)
      ?.abbreviation || employee.address.state;
  const formattedStreet = capitalizeFirstLetter(employee.address.street);
  const formattedCity = capitalizeFirstLetter(employee.address.city);

  return (
    <tr className="table-row" key={employee.lastName + employee.firstName}>
      <TableCell value={formattedFirstName} />
      <TableCell value={formattedLastName} />
      <TableCell value={formattedStartDate} />
      <TableCell value={employee.department} />
      <TableCell value={formattedBirthDate} />
      <TableCell value={formattedStreet} />
      <TableCell value={formattedCity} />
      <TableCell value={formattedState} />
      <TableCell value={employee.address.zip} />
    </tr>
  );
};
