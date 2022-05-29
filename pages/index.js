import React from 'react';
import About from '../components/About';
import Home from '../components/Home';
import Skills from '../components/Skills';
import styles from '../styles/Index.module.scss';

const index = () => (
  <div className={styles.index}>
    <header>
      <Home />
    </header>
    <main>
      <About />
    </main>
    <section>
      <Skills />
    </section>
  </div>
);

export default index;
