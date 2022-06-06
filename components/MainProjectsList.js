import React, { useState, useEffect } from 'react';
import { MainProjectItem } from './MainProjectItem';

const MainProjectsList = () => {
  const [projectsState, setProjectsState] = useState([])
  useEffect(() => {
    fetch(`../projects.json`).then((res) => res.json())
      .then((data) => setProjectsState(data))
  }, []);
  return (
    <ul>
      {projectsState.map((project) => (
        <MainProjectItem
          project={project}
          key={project.id} />
      ))}
    </ul>
  )
}

export default MainProjectsList