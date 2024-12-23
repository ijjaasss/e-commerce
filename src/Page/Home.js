import { Link } from 'react-router-dom';
import Product from '../Component/Product';
import Footer from '../Component/Footer';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          {/* Navbar toggler for mobile view */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo and Navbar content */}
          <Link className="navbar-brand mt-2 mt-lg-0" to="#">
            <img
              src="https://w7.pngwing.com/pngs/347/735/png-transparent-shopping-cart-illustration-shopping-cart-computer-icons-online-shopping-icon-grocery-cart-miscellaneous-angle-white.png"
              height="15"
              alt="Logo"
              loading="lazy"
            />
          </Link>

          {/* Collapse Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Image Section */}
      <img src="des1.png" style={{ width: '100%' }} alt="hero-img" />

      {/* Product Component */}
      <Product />

      {/* Additional Image */}
      <img src="https://freepngimg.com/save/552-chair-png-image/2492x2718" alt="product-img" style={{ width: '100%' }} />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Home;
