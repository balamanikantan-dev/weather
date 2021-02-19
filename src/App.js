import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import City from "./City/City";
import Map from "./Map/Map";
import About from "./About/About";

import './App.css';




function App() {


  // return (

  return (
    <div>
      <Router>
        <div>
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/" exact>
              {/* <Route path="/" exact component ={} */}
              <Home />
            </Route>
            <Route path="/city" exact>
              {/* <Route path="/" exact component ={} */}
              <City />
            </Route>
            <Route path="/map" exact>
              {/* <Route path="/" exact component ={} */}
              <Map />

            </Route>
            <Route path="/about" exact>
              {/* <Route path="/" exact component ={} */}
              <About />

            </Route>

          </Switch>
        </div>
      </Router>


    </div>

  )
}

export default App;
