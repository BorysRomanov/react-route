import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Footer} from'./Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul>
            <li><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Some other</a></li>
          </ul>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
