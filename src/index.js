import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { About } from './Pages/About/About';
import { Users } from './Pages/Users/Users';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/users" component={Users}/>
  </Router>
), document.getElementById('root'));
