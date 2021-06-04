import React, { useState, useContext } from "react";
import Error from "./Error";
import AxiosClient from "./AxiosClient";
import { UserContext } from "../context/useContext";
// eslint-disable-next-line
import { withRouter } from "react-router-dom";
const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { setRefresh, setAccess, setIsLogged } = useContext(UserContext);

  const login = async () => {
    try {
      const verify = await AxiosClient.post("/api/token/", {
        username,
        password,
      });
      localStorage.setItem("refresh", verify.data.refresh);
      localStorage.setItem("access", verify.data.access);
      setRefresh(verify.data.refresh);
      setAccess(verify.data.access);
      setIsLogged(true);
      history.push("/");
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.detail);
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form
    if (username.trim() === "" || password.trim() === "") {
      setErrorMsg("You must enter your username and password");
      setError(true);
      return;
    }
    setError(false);
    login();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4 font-weight-bold">
              Please log in
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h5>Username</h5>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <h5>Password</h5>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {error ? <Error message={errorMsg} /> : null}
      </div>
    </div>
  );
};

export default Login;
