import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import PageWrapper from './components/PageWrapper.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


/* pages */
import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js';
import Contact from './components/Pages/Contact.js';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
    <PageWrapper>
        <Route 
        exact={true}
        path="/"
          component={Home}>
         </Route>

        <Route path="/a"
          render={() => {
            return (
              <h1>I AM THE /a Route</h1>
            )
          }}>
         </Route>

         <Route path="/about" 
         component={About}>
         </Route>

         <Route path="/contact" component={Contact}></Route>
       
    </PageWrapper>
    </Router>
  );
}

export default App;
