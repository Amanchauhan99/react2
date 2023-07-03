import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
  
    return (
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/product' ? 'active' : ''}>
            <Link to="/product">Product</Link>
          </li>
          <li className={location.pathname === '/cart' ? 'active' : ''}>
            <Link to="/cart">Add to Cart</Link>
          </li>
        </ul>
      </nav>
    );
  };
 
export default Navbar;
