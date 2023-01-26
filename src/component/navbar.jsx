import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        CRUD Application
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/component/form.jsx">Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/component/Tabel.jsx">Tabel</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;