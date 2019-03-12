import React, { Component } from 'react';
import './css/index.css';
import 'animate.css'
import Routers from './pages/route'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
    render() {
    return (
      <div className="App" style={{position: 'relative'}}>
          <Router>
              <div>
                  <Routers />
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
