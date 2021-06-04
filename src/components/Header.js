import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/useContext';

const Header = () => {

  const { isLogged, setIsLogged } = useContext(UserContext);

  const logout = async () => {
    await localStorage.clear()
    setIsLogged(false)
    localStorage.getItem('access');
  } 

  useEffect(() => {
    console.log('is logged change')
    console.log(isLogged)
  }, [isLogged])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            Movie Test
          </Link>
        </h1>
      </div>
      {isLogged 
      ?
      <Link
        to={"/"}
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        onClick={logout}
      >
        Logout
      </Link>
      :
      <Link
        to={"/login"}
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Login
      </Link>
      }
    </nav>
  );
};

export default Header;