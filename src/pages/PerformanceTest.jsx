import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

const PerformanceTest = () => {
  
  const [count, setCount] = useState(0);

 
  const fetchPatients = () => {
    console.log("Normal Function Called");
  };


  useEffect(() => {
    console.log("useEffect Called");
  }, []);

  
  useEffect(() => {
    api.get("/users")
      .then(() => console.log("API Called Once"));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4 text-center">
        <h3>Performance Test</h3>

        <button
          className="btn btn-danger mt-3"
          onClick={() => {
            fetchPatients();
            setCount(count + 1);
          }}
        >
          Re-render {count}
        </button>
      </div>
    </>
  );
};

export default PerformanceTest;