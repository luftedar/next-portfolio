import React from 'react';
import projectItem from '../styles/Projectitem.module.css';

const ProjectItem = ({ project }) => {
  const topicItems = project.topics.map((topic,index) => 
    <span key={index}>{topic}{' '}</span>
  ) 
  return(
    <div className={projectItem.card}>
      <div>
        <img src={`https://raw.githubusercontent.com/luftedar/${project.name}/master/app_screenshot.png`} alt="" />
      </div>
      <div>
        <h3>{project.name.split('-').join(' ').toUpperCase()}</h3>
        <p>{project.language}</p>
        <div>
          {topicItems}
        </div>
        <a href={project.url} target="_blank">Source</a>
      </div>
    </div>
  );
};

export default ProjectItem;
