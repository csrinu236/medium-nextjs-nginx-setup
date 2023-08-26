import React from 'react';
import MyLink from './MyLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <MyLink href="/" className="link-btn">
          Home
        </MyLink>
        <MyLink href="/about" className="link-btn">
          About
        </MyLink>
        <MyLink href="/products" className="link-btn">
          All Products
        </MyLink>
      </div>
    </nav>
  );
};

export default Navbar;
