import React from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
          <li><Link href="/projects" legacyBehavior><a>Projects</a></Link></li>
          <li><Link href="/testimonials" legacyBehavior><a>Testimonials</a></Link></li>
          <li><Link href="/leave-testimonial" legacyBehavior><a>Leave a Testimonial</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
