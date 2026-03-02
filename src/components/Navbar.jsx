import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

const Navbar = () => {
  const { user, logout } = useContext(PatientContext);
  const navigate = useNavigate();
  
  // State for mobile menu toggle
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  const handleLogout = () => {
    logout();
    closeNav();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/dashboard" onClick={closeNav}>
          Healthcare Dashboard
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={!isNavCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard" onClick={closeNav}>
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/patients" onClick={closeNav}>
                Patients
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/performance-test" onClick={closeNav}>
                Performance
              </Link>
            </li>
          </ul>

          {/* User Section */}
          <div className="d-flex align-items-center gap-3">
            {user && (
              <span className="text-white fw-semibold">
                Welcome {user.username}
              </span>
            )}

            <button
              className="btn btn-light btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;