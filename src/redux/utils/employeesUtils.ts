import { Dispatch } from "redux";
import {
  fetchEmployeesFailure,
  fetchEmployeesStart,
  fetchEmployeesSuccess,
} from "../slices/employeeSlice";
import { fetchEmployees } from "../../services/fetchData";

export const getEmployees = () => async (dispatch: Dispatch<any>) => {
  dispatch(fetchEmployeesStart());
  try {
    const employees = await fetchEmployees();
    dispatch(fetchEmployeesSuccess(employees));
  } catch (error: any) {
    dispatch(fetchEmployeesFailure(error.message));
  }
};
