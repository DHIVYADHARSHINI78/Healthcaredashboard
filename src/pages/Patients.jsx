import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
   
    api.get("/users") 
      .then(res => setPatients(res.data))
      .catch(err => console.error("Error fetching patients:", err));
  }, []);

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toString().includes(search)
  );

  const indexOfLast = currentPage * patientsPerPage;
  const indexOfFirst = indexOfLast - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <>
      <Navbar />

      <div className="container-fluid container-md mt-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
          <h3 className="mb-2 mb-md-0">Patient List</h3>
          <div className="col-12 col-md-4">
            <input
              className="form-control"
              placeholder="Search by Name or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

      <div className="card shadow-sm">
  <div className="table-responsive">
    <table className="table table-hover align-middle mb-0">

      <thead className="table-primary">
        <tr>
          <th>Name</th>
          <th className="d-none d-sm-table-cell">Email</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {currentPatients.length === 0 ? (
          <tr>
            <td colSpan="3"
              className="text-center text-danger py-4">
              No Patients Found
            </td>
          </tr>
        ) : (
          currentPatients.map(p => (
            <tr key={p.id}>

              <td className="fw-bold">
                {p.name}
              </td>

              <td className="d-none d-sm-table-cell">
                {p.email}
              </td>

              <td className="text-center">
                <button
                  className="btn btn-success btn-sm px-3"
                  onClick={() =>
                    navigate(`/patient-details/${p.id}`)
                  }
                >
                  View
                </button>
              </td>

            </tr>
          ))
        )}
      </tbody>

    </table>
  </div>
</div>
      
        {totalPages > 1 && (
          <div className="d-flex flex-wrap justify-content-center mt-4 gap-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &laquo; Prev
            </button>

            
            <div className="d-none d-sm-flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm ${
                    currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <span className="d-sm-none align-self-center mx-2 small">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Patients;