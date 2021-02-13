import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
