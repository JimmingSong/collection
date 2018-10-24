import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Main from './pages/main'
import List from './pages/com/list'
// import MainRoute from './route'
import {BrowserRouter, Route,Router} from 'react-router-dom'
import Main from "./pages/main";
import About from "./pages/head";
import Rooroy from "./pages/rooroy";

class App extends Component {
    render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <List />
                  <Route path='/main' render={()=><Main/>}/>
                  <Route path='/about' render={()=><About/>}/>
                  <Route path='/rooroy' render={()=><Rooroy/>}/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
