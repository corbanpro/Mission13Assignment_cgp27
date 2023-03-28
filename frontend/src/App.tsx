import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Podcast from './Podcast';
import MovieCollection from './MovieCollection';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand m-1" to="#">
          Joel Hilton's Website
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Podcast">
                Podcast
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/MovieCollection">
                Movie Collection
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/MovieCollection" element={<MovieCollection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
