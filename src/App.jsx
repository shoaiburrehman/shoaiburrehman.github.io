import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from './Footer';
const  App = () => {
  return (
    // <div className="App">
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        {/* <Route exact path='/contact' component={Contact} /> */}
        <Redirect to='/' />
      </Switch>
      {/* <Footer /> */}
      {/* <h1> Welcome </h1> */}
    {/*  </div> */}
    </>
  );
}

export default App;
