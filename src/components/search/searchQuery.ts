export const employeeMatchesQuery = (employee: any, query: string) => {
  const { firstName, lastName, department, address } = employee;
  const { street, city, state } = address;
  const normalizedQuery = query.toLowerCase();
  return (
    firstName.toLowerCase().includes(normalizedQuery) ||
    lastName.toLowerCase().includes(normalizedQuery) ||
    street.toLowerCase().includes(normalizedQuery) ||
    city.toLowerCase().includes(normalizedQuery) ||
    state.toLowerCase().includes(normalizedQuery) ||
    department.toLowerCase().includes(normalizedQuery)
  );
};
