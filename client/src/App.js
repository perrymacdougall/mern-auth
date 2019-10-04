import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Landing />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
