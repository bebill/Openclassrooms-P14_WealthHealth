import { CreateEmployeeForm } from "../components/CreateEmployeeForm";

export const CreateEmployee = () => {
  return (
    <main className="create-employee-page">
      <div className="create-employee-container">
        <h2 className="create-employee-heading">Create Employee</h2>
        <CreateEmployeeForm />
      </div>
    </main>
  );
};
