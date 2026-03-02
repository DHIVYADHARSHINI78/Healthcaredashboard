import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

const PerformanceTest = () => {

  // state must be declared
  const [count, setCount] = useState(0);

  //  Normal Function
  const fetchPatients = () => {
    console.log("Normal Function Called");
  };

  // calling normal function
  fetchPatients();

  // ✅ useEffect runs once
  useEffect(() => {
    console.log("useEffect Called");
  }, []);

  // ✅ Correct API Call
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
          onClick={() => setCount(count + 1)}
        >
          Re-render {count}
        </button>
      </div>
    </>
  );
};

export default PerformanceTest;