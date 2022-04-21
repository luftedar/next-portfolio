import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => (
  <>
    <Navbar />
    <div>
      <main>
        {children}
      </main>
    </div>
  </>
);

export default Layout;
