import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AdminNavBar() {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="container mt-4">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg rounded-3">
          {/* Logo or Branding */}
          <NavLink className="navbar-brand text-primary font-weight-bold fs-4" to="/adminhome">
            Admin Panel
          </NavLink>

          {/* Navbar Toggler (for mobile responsiveness) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links (collapsed version on mobile) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Dashboard Link */}
              <li className="nav-item">
                <NavLink
                  to="/adminhome"
                  className={`nav-link ${activeLink === 'dashboard' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('dashboard')}
                >
                  Dashboard
                </NavLink>
              </li>

              {/* Product Section Link */}
              <li className="nav-item">
                <NavLink
                  to="/adminproduct"
                  className={`nav-link ${activeLink === 'product' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('product')}
                >
                  Product Section
                </NavLink>
              </li>

              {/* User Section Link */}
              <li className="nav-item">
                <NavLink
                  to="/allusers"
                  className={`nav-link ${activeLink === 'user' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('user')}
                >
                  User Section
                </NavLink>
              </li>

              {/* Log Out Link */}
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={`nav-link ${activeLink === 'logout' ? 'active' : ''}`}
                  onClick={() => {
                    sessionStorage.clear();
                    handleLinkClick('logout');
                  }}
                >
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      
    </div>
  );
}

export default AdminNavBar;
