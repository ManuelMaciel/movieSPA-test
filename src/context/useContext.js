import { useState, useEffect, createContext, useRef } from "react";
import AxiosClient from "../components/AxiosClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [access, setAccess] = useState(localStorage.getItem("access") || null);
  const [refresh, setRefresh] = useState(
    localStorage.getItem("refresh") || null
  );
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const resp = await AxiosClient.post("/api/token/verify/", {
        token: access,
      });
      console.log(resp);
      console.log("i have access");
      setIsLogged(true);
    } catch (error) {
      console.log("i dont have access");
      if (error.response.status === 401) {
        const resp = await AxiosClient.post("/api/token/refresh/", {
          refresh: refresh,
        });
        setAccess(resp.data.access);
      }
    }
  };

  useEffect(() => {
    if (access !== null) {
      fetchUser();
      setLoading(false);
      console.log(`access: ${access}`);
      console.log(`refresh: ${refresh}`);
      console.log(isLogged);
      return;
    }
    console.log("you are not loged");
    console.log(isLogged);
  }, [access, refresh, isLogged]);

  return (
    <UserContext.Provider
      value={{
        access,
        refresh,
        loading,
        isLogged,
        setLoading,
        setAccess,
        setRefresh,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
