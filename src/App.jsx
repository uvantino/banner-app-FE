import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <aside className="sidebar">
          <h1 className="app-title">Banner App</h1>
          <nav>
            <ul className="sidebar-nav">
              <li>
                <Link to="/dashboard" className="nav-link">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home (Banner)
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
