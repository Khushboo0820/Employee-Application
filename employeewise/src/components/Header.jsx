import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route path

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <header className="header-container">
      <h2 className="admin-title">Admin Panel</h2>
      <nav>
        {/* Hide "Users" link and "Logout" button if on login page */}
        {location.pathname !== "/login" && (
          <>
            <Link to="/users" className="btn btn-outline-primary mx-2">
              Users
            </Link>
            <button className="btn btn-danger mx-2" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
