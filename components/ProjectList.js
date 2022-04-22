import React from 'react';
import ProjectItem from './ProjectItem';
import projectList from '../styles/Projectlist.module.css';

const ProjectList = ({projects}) => {
  return (
    <main className={projectList.grid}>
      {projects.map(project => 
      <ProjectItem project={project} key={project.id} />
      )}
    </main>
  )
}

export default ProjectList