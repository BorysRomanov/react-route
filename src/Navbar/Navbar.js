import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';
import { About } from '../Pages/About/About';
import { Users } from '../Pages/Users/Users';
import { Router, Route, hashHistory, Link } from 'react-router';

export class Navbar extends React.Component {
  render() {
    return (
      <div className="App-header">
        <ul role="nav">
          <li><a href="/"><img src={logo} className="App-logo" alt="logo" /></a></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><a href="#">Some other</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
