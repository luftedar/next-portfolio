import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MobileNavbar.module.scss'
import Image from 'next/image';

const Navbar = () => {
  const [openMenuState, setOpenMenuState] = useState(false);
  return (
    <nav className={styles.mobileNavBar}>
      <section id='mobile-menu'>
        <div id='mobile-menu-left' className={openMenuState ?
          'hide-menu2'
          : 'hide-menu2 show-menu2'}></div>
        <Link href="/">
          <Image
            src="/home-logo.png"
            alt="Home Page Logo"
            width="70px"
            height="41px" />
        </Link>
        <ul id='mobile-nav' className={openMenuState ?
          'hide-menu'
          : 'hide-menu show-menu'}>
          <li>
            <Link href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact">
              Contact
            </Link>
          </li>
        </ul>
        <div id='mobile-menu-btn'
          onClick={() => { setOpenMenuState(!openMenuState) }}
          className={openMenuState && 'open'}
        >
          <div id='mobile-menu-burger'></div>
        </div>
      </section>
      {/* <div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div> */}
    </nav >
  )
};

export default Navbar;
