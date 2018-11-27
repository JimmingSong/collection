import React, { Component } from 'react';
import './css/index.css';
import 'animate.css'
import List from './pages/com/list'
import Routers from './pages/route'
// import {BrowserRouter as Router} from 'react-router-dom'
import {Router} from 'mirrorx'

class App extends Component {
    render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <List />
                  <Routers />
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
