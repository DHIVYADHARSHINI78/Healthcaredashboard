

  import { Link, useNavigate } from "react-router-dom";
  import { useContext } from "react";
  import { PatientContext } from "../context/PatientContext";

  const Navbar = () => {

    const { user, logout } = useContext(PatientContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate("/");
    };

    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">

          <Link className="navbar-brand" to="/dashboard">
            Healthcare Dashboard
          </Link>

          <div>
            <Link className="btn btn-light me-2" to="/dashboard">
              Dashboard
            </Link>

            <Link className="btn btn-light me-2" to="/patients">
              Patients
            </Link>

            <Link className="btn btn-warning me-2" to="/performance-test">
              Performance
            </Link>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <span className="text-white">
            {user && `Welcome ${user.username}`}
          </span>

        </div>
      </nav>
    );
  };

  export default Navbar;