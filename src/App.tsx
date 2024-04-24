import "./sass/main.scss";
import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import store from "./redux/utils/store";

import { CreateEmployee } from "./pages/create-employee";
import { Header } from "./layout/Header";
// import { Footer } from "./layout/Footer";
// import { Error404 } from "./pages/error404";

import { EmployeesList } from "./pages/employees-list";
import { getEmployees } from "./redux/utils/employeesDispatch";

const App = () => {
  useEffect(() => {
    store.dispatch(getEmployees());
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/create-employee" />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employees-list" element={<EmployeesList />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
