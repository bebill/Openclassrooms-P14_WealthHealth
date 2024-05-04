import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/utils/selectors";
import { EmployeesTable } from "../components/EmployeesTable";
import { SearchBar } from "../components/SearchBar";
import { EntriesSelector } from "../components/EntriesSelector";
import { employeeMatchesQuery } from "../components/search/searchQuery";

export const EmployeesList = () => {
  const employeesData = useSelector(selectEmployees);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    console.log("Fetched employees:", employeesData);
  }, [employeesData]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleEntriesPerPageChange = (value: number) => {
    setEntriesPerPage(value);
  };

  const filteredEmployees = employeesData
    .filter((employee: any) => employeeMatchesQuery(employee, searchQuery))
    .slice(0, entriesPerPage);

  return (
    <main className="employees-list-page">
      <div className="employees-list-container">
        <h2 className="employees-list-heading">Current Employees</h2>
        <EntriesSelector onChange={handleEntriesPerPageChange} />
        <SearchBar onSearch={handleSearch} />
        <EmployeesTable
          employees={filteredEmployees}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  );
};
