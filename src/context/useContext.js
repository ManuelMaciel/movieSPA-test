import { useState, useEffect, createContext } from "react";
import AxiosClient from '../components/AxiosClient';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [access, setAccess ] = useState(localStorage.getItem("access") || null);
  const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      const resp = await AxiosClient.post("/api/token/verify/", {token: access });
      console.log(resp)
      console.log('i have access')
    } catch(error) {
      console.log('i dont have access')
      if(error.response.status === 401){
        const resp = await AxiosClient.post("/api/token/refresh/", {refresh: refresh });
        setAccess(resp.data.access)
      };
    }
  }
  
  useEffect(() => {
      if(access !== null) {
        fetchUser()
      }
      console.log(`access: ${access}`)
      console.log(`refresh: ${refresh}`)
      // console.log('no hay nada')
  }, [access, refresh]);

  return (
    <UserContext.Provider 
      value={{access, loading, setAccess, setRefresh}}
    >
        { children }
    </UserContext.Provider>
  )
}