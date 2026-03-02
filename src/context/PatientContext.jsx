

import { createContext, useState } from "react";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <PatientContext.Provider value={{ user, login, logout }}>
      {children}
    </PatientContext.Provider>
  );
};