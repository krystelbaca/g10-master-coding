import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';

import About from './components/About';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div>
              <Link className="nav-link" to="/">Home</Link>
            </div>
            <div>
              <Link className="nav-link" to="/about">About</Link>
            </div>
            <div>
              <Link className="nav-link" to="/login">Login</Link>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
