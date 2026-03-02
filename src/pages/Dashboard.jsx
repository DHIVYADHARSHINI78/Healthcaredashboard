

import { useEffect,useState,useContext } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { PatientContext } from "../context/PatientContext";

const Dashboard = () => {

  const [patients,setPatients]=useState([]);
  const { user } = useContext(PatientContext);

  useEffect(()=>{
    api.get("/users")
      .then(res=>setPatients(res.data));
  },[]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h3>Welcome {user?.username}</h3>

        <div className="row mt-3">
          {patients.map(p=>(
            <div className="col-md-4 mb-3" key={p.id}>
              <div className="card shadow-sm p-3">
                <h5>{p.name}</h5>
                <p>{p.email}</p>
                <p>{p.phone}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Dashboard;