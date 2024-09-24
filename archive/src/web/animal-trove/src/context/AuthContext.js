import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import nookies from "nookies";

export const authContext = createContext();

export default function AuthContext({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const logout = () => {
    nookies.destroy(null, "authToken");
    nookies.destroy(null, "userName");
    setUser(null);
    navigate("/auth");
  };

  return (
    <authContext.Provider value={{ user, setUser, logout }}>
      {children}
    </authContext.Provider>
  );
}
