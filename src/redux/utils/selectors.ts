import { RootState } from "./store";

export const selectEmployees = (state: RootState) => state.employees.employees;
