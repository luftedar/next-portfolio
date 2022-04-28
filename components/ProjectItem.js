import React from 'react';
import Topic from './Topic';
import ProjectLanguage from './ProjectLanguage';
import projectItem from '../styles/Projectitem.module.css';

const ProjectItem = ({ project }) => {
  const topicItems = project.topics.map((topic,index) => 
    <span key={index}>{topic}{' '}</span>
  );
  const langColor = {
    HTML: '#e34c26',
    Ruby: '#e34c26',
    JavaScript: '#f0db4f',
    PLpgSQL: '#008bb9',
  };
  return(
    <div className={projectItem.card}
    style={
      {border: `1px solid ${langColor[project.language]}`}      
    }
    >
      <div>
        <img src={`https://raw.githubusercontent.com/luftedar/${project.name}/master/app_screenshot.png`} alt="" />
      </div>
      <div>
        <h3>{project.name.split('-').join(' ').toUpperCase()}</h3>
        <div>
          <Topic topic={topicItems}/>
        </div>
        {/* <ProjectLanguage language={project.language}/> */}
        <a href={project.url} target="_blank">Source</a>
      </div>
    </div>
  );
};

export default ProjectItem;
