import React from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <MobileNavbar />
    <main>
      {children}
    </main>
  </>
);

export default Layout;
