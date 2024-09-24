import React, { useContext, useEffect } from "react";
import nookies from "nookies";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export default function AuthenticatedPage({ children }) {
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    const authTokenCookie = nookies.get().authToken;
    if (!authTokenCookie) {
      //   navigate("/auth");
    } else {
      const authTokenCookie = nookies.get().authToken;
      const userNameCookie = nookies.get().userName;
      if (authTokenCookie && userNameCookie) {
        setUser({ userName: userNameCookie });
      }
    }
  }, []);
  return <>{children}</>;
}
