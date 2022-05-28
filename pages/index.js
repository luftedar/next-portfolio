import React from 'react';
import About from '../components/About';
import Home from '../components/Home';
import styles from '../styles/Index.module.scss';

const index = () => (
  <div className={styles.index}>
    <header>
      <Home />
    </header>
    <section>
      <About />
    </section>
  </div>
);

export default index;
