import React from 'react';
import ProjectItem from './ProjectItem';
import projectList from '../styles/Projectlist.module.css';

const ProjectList = ({ projects }) => (
  <div className={projectList.grid}>
    {projects.map((project) => <ProjectItem project={project} key={project.id} />)}
  </div>
);

export default ProjectList;
