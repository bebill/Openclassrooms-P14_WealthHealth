import { mockEmployees } from "../data/employeesData";

export const fetchEmployees = async () => {
  try {
    console.log("Fetched employees from mock data:", mockEmployees);
    return mockEmployees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};
