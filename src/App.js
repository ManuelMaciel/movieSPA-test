import React from 'react'
import Header from './components/Header'
import MoviesContainer from './components/MoviesContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
        <div className="container mt-5">
          <Switch>
          </Switch>
          <MoviesContainer />
        </div>
    </Router>
  )
}

export default App
