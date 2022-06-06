import React from 'react'

export const MainProjectItem = ({ project }) => {
  return (
    <li>
      <img src={project.img} alt={project.projectName} />
      <h2>{project.projectName}</h2>
      {project.liveDemo !== false
        ? <a href={project.liveDemo}>Live Demo</a>
        : <p>Live Demo Not Available Due to the Limited API</p>
      }
      <a href={project.gitHub}>Source Code</a>
      <ul>
        {project.tags.map((tag) => (
          <li key={project.id}>
            {tag}
          </li>
        ))}
      </ul>
    </li>
  )
}
