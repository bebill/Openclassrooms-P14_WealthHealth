import { mockEmployees } from "../data/employeesData";

export const fetchEmployees = async () => {
  try {
    return mockEmployees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};
