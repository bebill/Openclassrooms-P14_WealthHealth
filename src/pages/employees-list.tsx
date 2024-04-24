import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/utils/selectors";
import { EmployeesTable } from "../components/EmployeesTable";
import { employeeMatchesQuery } from "../components/search/searchQuery";
import { SearchBar } from "../components/SearchBar";

export const EmployeesList = () => {
  const employeesData = useSelector(selectEmployees);

  useEffect(() => {
    console.log("Fetched employees:", employeesData);
  }, [employeesData]);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredEmployees = employeesData.filter((employee: any) =>
    employeeMatchesQuery(employee, searchQuery)
  );

  return (
    <main className="employees-list-page">
      <div className="employees-list-container">
        <h2 className="employees-list-heading">Current Employees</h2>
        <SearchBar onSearch={handleSearch} />
        <EmployeesTable
          employees={filteredEmployees}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  );
};
