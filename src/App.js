import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';

import MoviesList from "./MoviesList"

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
      <h1>React Movie App</h1>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />  
      </Switch>
    </div>
  </Router>
)

export default App;

