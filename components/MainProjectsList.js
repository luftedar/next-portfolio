import React, { useState, useEffect } from 'react';
import { MainProjectItem } from './MainProjectItem';
import styles from '../styles/MainProjectList.module.scss'

const MainProjectsList = () => {
  const [projectsState, setProjectsState] = useState([])
  useEffect(() => {
    fetch(`../projects.json`).then((res) => res.json())
      .then((data) => setProjectsState(data))
  }, []);
  return (
    <ul className={styles.mainProjectsGrid}>
      {projectsState.map((project) => (
        <MainProjectItem
          project={project}
          key={project.id} />
      ))}
    </ul>
  )
}

export default MainProjectsList