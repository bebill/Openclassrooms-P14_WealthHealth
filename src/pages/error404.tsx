import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <main>
      <div className="error-page">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">
          Oops! The page you're trying to access does not exist.
        </h2>
        <Link to="/" className="error-button">
          Go back to home page
        </Link>
      </div>
    </main>
  );
};
