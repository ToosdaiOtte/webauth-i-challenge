import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Clock-It</h1>
        <div>
          <Link to='/login'>Login</Link>
        </div>
        <div>
          <Link to='/signup'>Sign Up</Link>
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' />
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
