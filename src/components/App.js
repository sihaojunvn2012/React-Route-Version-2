import React, { Component } from 'react';
import '.././css/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Contact from './Contact';
import DetailNew from './DetailNew';
import News from './News';
import DirectionalURL from '../Router/DirectionalURL';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    console.log(this.props.match);
    return (
      <Router>
        <div>
          <Nav />
          <DirectionalURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
