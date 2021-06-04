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
    } catch(error) {
        console.log(error);
    }
  }
  
  useEffect(() => {
      // if(access !== null) {
        // fetchUser()
        console.log(`access: ${access}`)
        console.log(`refresh: ${refresh}`)
      // }
      // console.log('no hay nada')
  }, [loading]);

  return (
    <UserContext.Provider 
      value={{access, loading, setAccess, setRefresh}}
    >
        { children }
    </UserContext.Provider>
  )
}