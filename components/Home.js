import React from 'react';
import styles from '../styles/Home.module.scss'

const Home = () => (
  <div className={styles.home}>
    <div>
      <div>
        <h2>Hi! I’m Orçun</h2>
        <h1>I am a full-stack web developer.</h1>
      </div>
      <div>
        <a href="#contact">Contact Me!</a>
      </div>
    </div>
  </div>
);

export default Home;
