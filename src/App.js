import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Main from './pages/main'
import List from './pages/com/list'
// import MainRoute from './route'
import Routers from './pages/route'
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'

class App extends Component {
    render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <List />
                  <Routers/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
