import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({projects}) => {
  return (
    <div>
      {projects.map(project => 
      <ProjectItem project={project} key={project.id} />
      )}
    </div>
  )
}

export default ProjectList