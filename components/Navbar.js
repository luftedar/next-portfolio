import React from 'react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import navbarStyles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const currentRouter = router.pathname;
  return (
  <nav className={navbarStyles.nav}>
    <ul>
      <li>
        <Link href="/">
          <a className={currentRouter === '/' ? 'active' : 'passive'}>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a className={currentRouter === '/projects' ? 'active' : 'passive'}>
            Projects
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className={currentRouter === '/contact' ? 'active' : 'passive'}>
            Contact
          </a>
        </Link>
      </li>
    </ul>
  </nav>
  )
};

export default Navbar;
