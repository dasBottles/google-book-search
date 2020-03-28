import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/index';
import Search from './components/Search/index';
import Saved from './components/Saved/index';
import Jumbotron from './components/Jumbotron/index';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
