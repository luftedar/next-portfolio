import React from 'react';
import projectItem from '../styles/Projectitem.module.css';

const ProjectItem = ({project}) => {
  return (
    <div className={projectItem.card}>
      <div>
        <img src={`https://raw.githubusercontent.com/luftedar/${project.name}/master/app_screenshot.png`} alt="" />
      </div>
      <div>
        <h3>{project.name.split("-").join(" ").toUpperCase()}</h3>
        {/* <p>{project.url}</p> */}
        <p>{project.language}</p>
        <p>{project.topics}</p>
      </div>
    </div>
    )
}

export default ProjectItem