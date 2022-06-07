import React from 'react';
import Image from 'next/image';
import MainProjectsList from './MainProjectsList';
import styles from '../styles/MainProjects.module.scss';

const MainProjects = () => {
  return (
    <div className={styles.mainProjects} id="projects">
      <hgroup>
        <h2>My <span><p>Projects</p></span></h2>
      </hgroup>
      <article>
        <MainProjectsList />
      </article>
      <div>
        <button>See All Projects <span>
          <Image src="/Refresh.png" width="30px" height="30px" />
        </span></button>
      </div>
    </div>
  )
}

export default MainProjects