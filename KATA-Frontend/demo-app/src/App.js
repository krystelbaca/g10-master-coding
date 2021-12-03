import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import About from './components/About';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>DEMO APP</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" home={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/form" element={<BasicForm />}/>
          </Routes>
        </nav>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

export default App;
