

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PatientContext } from "../context/PatientContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const { login } = useContext(PatientContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email === "patient@test.com" && password === "123456") {
      login({
        username: "Dhivya",
        email
      });
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
  
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ 
        background: "gray",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >

      <div 
        className="card shadow-lg p-4 p-md-5" 
        style={{ 
          width: '100%', 
          maxWidth: '400px', 
          borderRadius: '20px', 
          border: 'none' 
        }}
      >
     
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">Patient Portal</h3>
         
        </div>

 
        <form onSubmit={handleLogin}>
          
      
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold small text-muted">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control form-control-lg shadow-none"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: '10px' }}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-bold small text-muted">Password</label>
            <input
              id="password"
              type="password"
              className="form-control form-control-lg shadow-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: '10px' }}
              required
            />
          </div>

       
          <div className="d-grid">
            <button 
              type="submit" 
              className="btn btn-primary btn-lg fw-bold"
              style={{ 
                borderRadius: '10px',
                background: 'linear-gradient(to right, #667eea, #764ba2)',
                border: 'none',
                letterSpacing: '1px'
              }}
            >
              Login
            </button>
          </div>
          
        </form>

      
      </div>
    </div>
  );
};

export default Login;