import React from 'react';

import './css/index.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';

function Portfolio() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/projects" component={Projects}/>
        <Route exact path ="/contact" component ={Contact} />
      </Switch>
    </div>
  );
}

export default Portfolio;
