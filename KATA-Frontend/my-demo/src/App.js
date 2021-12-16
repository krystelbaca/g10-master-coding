import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import { ProvideAuth } from "./helpers/auth";

import Home from './components/Home';

import About from './components/About';

import Login from './components/Login';

import PrivateRoute from './components/PrivateRoute';

import Profile from './components/Profile';

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
        <ProvideAuth>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={
              <PrivateRoute redirectTo="/login">
                <Profile />
              </PrivateRoute>
            }
            />
          </Routes>
        </ProvideAuth>

      </div>
    </Router>
  );
}

export default App;
