

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";
import PerformanceTest from "./pages/PerformanceTest";
import PrivateRoute from "./PrivateRoute";
import { PatientProvider } from "./context/PatientContext";

function App() {
  return (
    <PatientProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/dashboard"
            element={<PrivateRoute><Dashboard/></PrivateRoute>}
          />

          <Route path="/patients"
            element={<PrivateRoute><Patients/></PrivateRoute>}
          />

          <Route path="/patient-details/:id"
            element={<PrivateRoute><PatientDetails/></PrivateRoute>}
          />

          <Route path="/performance-test"
            element={<PrivateRoute><PerformanceTest/></PrivateRoute>}
          />

        </Routes>

      </BrowserRouter>
    </PatientProvider>
  );
}

export default App;