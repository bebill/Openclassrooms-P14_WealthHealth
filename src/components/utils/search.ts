export const employeeMatchesQuery = (employee: any, query: string) => {
  const { firstName, lastName, department, address, birthDate, startDate } =
    employee;
  const { street, city, state, zip } = address;
  const normalizedQuery = query.toLowerCase();
  return (
    firstName.toLowerCase().includes(normalizedQuery) ||
    lastName.toLowerCase().includes(normalizedQuery) ||
    birthDate.includes(normalizedQuery) ||
    startDate.includes(normalizedQuery) ||
    street.toLowerCase().includes(normalizedQuery) ||
    city.toLowerCase().includes(normalizedQuery) ||
    state.toLowerCase().includes(normalizedQuery) ||
    zip.includes(normalizedQuery) ||
    department.toLowerCase().includes(normalizedQuery)
  );
};
