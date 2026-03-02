import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { PatientContext } from "./context/PatientContext";

const PrivateRoute = ({ children }) => {

  const { user } = useContext(PatientContext);

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;