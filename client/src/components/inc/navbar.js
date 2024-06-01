import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark justify-content-center fixed-top">
      <Link class="navbar-brand" to="/">
        Company
      </Link>
      <div class="continer-fluid ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/help" class="nav-link active">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link active">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link active">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;