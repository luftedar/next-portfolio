import React from 'react';
import Link from 'next/link';
import navbarStyles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={navbarStyles.nav}>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link href="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/about">
          About Me
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
