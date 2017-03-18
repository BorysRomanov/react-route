import React from 'react';
import './App.css';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
