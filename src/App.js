import React from "react";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/useContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={MoviesContainer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/movie/:id" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
