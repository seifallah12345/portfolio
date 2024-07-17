import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/leave-testimonial">Leave a Testimonial</Link>
    </nav>
  </header>
);

export default Header;
