import React, { Component } from 'react';
import '.././css/App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import DirectionalURL from '../Router/DirectionalURL';
import { BrowserRouter as Router } from "react-router-dom";
import {connect} from 'react-redux';

class App extends Component {
  render() {
   
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
const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)