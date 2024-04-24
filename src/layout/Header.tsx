import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/wealthhealth_logo.png`}
            alt="Logo Wealth Health"
          />
        </Link>
        <h1>HRnet</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/employees-list">Employees</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
