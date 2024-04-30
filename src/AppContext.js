import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const appContext = createContext();

export default function AppContext({ children }) {
  const [user, setUser] = useState(null);
  const logout = () => {};

  return (
    <appContext.Provider value={{ user, setUser, logout }}>
      {children}
    </appContext.Provider>
  );
}

