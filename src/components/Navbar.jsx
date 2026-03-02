import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

const Navbar = () => {
  const { user, logout } = useContext(PatientContext);
  const navigate = useNavigate();

  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        
 
        <Link className="navbar-brand" to="/dashboard">
          Healthcare Dashboard
        </Link>

   
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <Link className="nav-link" to="/patients">Patients</Link>
            <Link className="nav-link" to="/performance-test">Performance</Link>
            
            {user ? (
              <button className="btn btn-outline-light btn-sm ms-lg-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="nav-link" to="/">Login</Link>
            )}
          </div>
          
          <span className="text-white ms-lg-3">
            {user && `Welcome ${user.username}`}
          </span>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;