import React from 'react';

const ProjectItem = ({project}) => {
  return (
    <div>
      <h3>{project.name.split("-").join(" ").toUpperCase()}</h3>
      <p>{project.url}</p>
      <p>{project.language}</p>
      <p>{project.topics}</p>
      <img src={`https://raw.githubusercontent.com/luftedar/${project.name}/master/app_screenshot.png`} alt="" />
    </div>
    )
}

export default ProjectItem