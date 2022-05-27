import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div>
      <Link href="/">
        <Image
          src="/home-logo.png"
          alt="Home Page Logo"
          width="100px"
          height="61px" />
      </Link>
    </div>
    <div className="link-list">
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
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
      </ul>
    </div>
  </nav>
);

export default Navbar;
