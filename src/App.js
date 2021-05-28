import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <div className="header">
          <h1> Jeremy Shih </h1>
          <div className="divider"></div>
          <BrowserRouter>
            <ul className="links">
              <li><Button component={Link} to="/AboutMe" variant="contained"> About Me</Button></li>
              <li><Button component={Link} to="/Resume" variant="contained"> Resume</Button></li>
              <li><Button component={Link} to="/Projects" variant="contained"> Projects</Button></li>
            </ul>
            <Switch>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            </Switch>
          </BrowserRouter>
        </div>

        {/* <div className="content">
          <Home/>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default App;
