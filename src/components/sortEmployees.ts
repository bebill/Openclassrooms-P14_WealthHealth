import { Employee } from "../interfaces/employeeInterface";
import { employeeMatchesQuery } from "./search/searchQuery";

const compareEmployees = (
  employees: Employee[],
  sortBy: string,
  sortOrder: "asc" | "desc" | "original"
): Employee[] => {
  const sortedEmployees = [...employees];

  const compareEmployees = (a: Employee, b: Employee) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (aValue instanceof Date && bValue instanceof Date) {
      return sortOrder === "asc"
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    return 0;
  };

  sortedEmployees.sort(compareEmployees);
  return sortedEmployees;
};

export const sortEmployeesByFirstName = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  return compareEmployees(employees, "firstName", sortOrder);
};

export const sortEmployeesByLastName = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  return compareEmployees(employees, "lastName", sortOrder);
};

export const sortEmployeesByStartDate = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  return compareEmployees(employees, "startDate", sortOrder);
};

export const sortEmployeesByDepartment = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  return compareEmployees(employees, "department", sortOrder);
};

export const sortEmployeesByBirthDate = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  return compareEmployees(employees, "birthDate", sortOrder);
};

export const sortEmployeesByStreet = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  const sortedEmployees = [...employees];
  sortedEmployees.sort((a, b) => {
    const aValue = a.address.street.toLowerCase();
    const bValue = b.address.street.toLowerCase();
    return sortOrder === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  return sortedEmployees;
};

export const sortEmployeesByCity = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  const sortedEmployees = [...employees];
  sortedEmployees.sort((a, b) => {
    const aValue = a.address.city.toLowerCase();
    const bValue = b.address.city.toLowerCase();
    return sortOrder === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  return sortedEmployees;
};

export const sortEmployeesByState = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  const sortedEmployees = [...employees];
  sortedEmployees.sort((a, b) => {
    const aValue = a.address.state.toLowerCase();
    const bValue = b.address.state.toLowerCase();
    return sortOrder === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  return sortedEmployees;
};

export const sortEmployeesByZipCode = (
  employees: Employee[],
  sortOrder: "asc" | "desc"
): Employee[] => {
  const sortedEmployees = [...employees];
  sortedEmployees.sort((a, b) => {
    const aValue = a.address.zip.toLowerCase();
    const bValue = b.address.zip.toLowerCase();
    return sortOrder === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
  return sortedEmployees;
};

export const sortAndFilterEmployees = (
  employees: Employee[],
  sortedColumn: string | null,
  sortOrder: "asc" | "desc",
  searchQuery: string
) => {
  let sortedEmployees = [...employees];

  if (sortedColumn) {
    switch (sortedColumn) {
      case "First Name":
        sortedEmployees = sortEmployeesByFirstName(sortedEmployees, sortOrder);
        break;
      case "Last Name":
        sortedEmployees = sortEmployeesByLastName(sortedEmployees, sortOrder);
        break;
      case "Start Date":
        sortedEmployees = sortEmployeesByStartDate(sortedEmployees, sortOrder);
        break;
      case "Department":
        sortedEmployees = sortEmployeesByDepartment(sortedEmployees, sortOrder);
        break;
      case "Date of Birth":
        sortedEmployees = sortEmployeesByBirthDate(sortedEmployees, sortOrder);
        break;
      case "Street":
        sortedEmployees = sortEmployeesByStreet(sortedEmployees, sortOrder);
        break;
      case "City":
        sortedEmployees = sortEmployeesByCity(sortedEmployees, sortOrder);
        break;
      case "State":
        sortedEmployees = sortEmployeesByState(sortedEmployees, sortOrder);
        break;
      case "Zip Code":
        sortedEmployees = sortEmployeesByZipCode(sortedEmployees, sortOrder);
        break;
      default:
        break;
    }
  }

  let filteredEmployees = sortedEmployees;
  if (searchQuery) {
    filteredEmployees = sortedEmployees.filter((employee) =>
      employeeMatchesQuery(employee, searchQuery)
    );
  }

  return filteredEmployees;
};
