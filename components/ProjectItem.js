import React from 'react';
import projectItem from '../styles/Projectitem.module.css';
import TopicTag from './TopicTag';

const ProjectItem = ({ project }) => (
  <div className={projectItem.card}>
    <div>
      <img src={`https://raw.githubusercontent.com/luftedar/${project.name}/master/app_screenshot.png`} alt="" />
    </div>
    <div>
      <h3>{project.name.split('-').join(' ').toUpperCase()}</h3>
      {/* <p>{project.url}</p> */}
      <p>{project.language}</p>
      <div className='topic-container'>
        {project.topics.map((topic, index) => <TopicTag topic={topic} key={index} />)}
      </div>
    </div>
  </div>
);

export default ProjectItem;
