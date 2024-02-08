import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem("access_token")) {
      // LoginData vil være i browseren indtil den lukkes
      setLoginData(JSON.parse(sessionStorage.getItem("access_token")));
    }
  }, []); // Empty dependency array means useEffect runs once when the component mounts

  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
