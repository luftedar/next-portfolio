import React, { useEffect } from 'react';
import { MainProjectItem } from './MainProjectItem';
import projects from '../project.js';

const MainProjectsList = () => {
  const projectObject = [];
  useEffect(() => {
    projectObject = await fetch(``)
  });
  return (
    <ul>
      <MainProjectItem />
    </ul>
  )
}

export default MainProjectsList