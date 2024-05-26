import { Link, NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isCreateEmployeePage = location.pathname === "/create-employee";
  const isEmployeesListPage = location.pathname === "/employees-list";
  const isErrorPage = location.pathname === "/error404";

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/wealthhealth_logo.webp`}
            alt="Logo Wealth Health"
          />
        </Link>
        <h1 className="header-title">HRnet</h1>
        <nav className="nav">
          <ul className="nav-list">
            {isCreateEmployeePage && (
              <li className="nav-item">
                <NavLink to="/employees-list" className="nav-link">
                  Current Employees
                </NavLink>
              </li>
            )}
            {isEmployeesListPage && (
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Create Employee
                </NavLink>
              </li>
            )}
            {isErrorPage && (
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Return Home
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
