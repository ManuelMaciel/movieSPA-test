import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/useContext";

const Header = () => {
  const { isLogged, setIsLogged, setAccess, setRefresh } =
    useContext(UserContext);

  const prevent = useRef(0);

  const logout = async () => {
    setIsLogged(false);
    setAccess(null);
    setRefresh(null);
    await localStorage.clear();
    localStorage.getItem("access");
    prevent.current += 1;
  };

  useEffect(() => {
    if (prevent.current === 0) return;
    console.log("is logged change");
    console.log(isLogged);
  }, [isLogged, prevent.current]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            Movie Test
          </Link>
        </h1>
      </div>
      {isLogged ? (
        <Link
          to={"/"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
          onClick={logout}
        >
          Logout
        </Link>
      ) : (
        <Link
          to={"/login"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Header;
