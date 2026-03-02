


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

const PatientDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {

    api.get(`/users/${id}`)
      .then(res => {
        setPatient(res.data);
        setError(false);
      })
      .catch(() => {
        setError(true);   
      });

  }, [id]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

   
        {error ? (
          <div className="card p-4 text-center shadow">

            <h4 className="text-danger">
              Patient Not Found
            </h4>

            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/patients")}
            >
              Back to Patients
            </button>

          </div>
        ) : patient ? (

          <div className="card p-4 shadow">
            <h3>{patient.name}</h3>
            <p>Email: {patient.email}</p>
            <p>Phone: {patient.phone}</p>
            <p>City: {patient?.address?.city}</p>

            <button
              className="btn btn-secondary"
              onClick={() => navigate("/patients")}
            >
              Back
            </button>
          </div>

        ) : (

    
          <div className="text-center">
            Loading Patient...
          </div>

        )}

      </div>
    </>
  );
};

export default PatientDetails;