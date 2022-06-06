import React from 'react';
import styles from '../styles/MainProjectItem.module.scss';

export const MainProjectItem = ({ project }) => {
  return (
    <li className={styles.mainProjectItem}>
      <article>
        <img src={project.img} alt={project.projectName} />
        <div>
          <ul>
            {project.tags.map((tag) => (
              <li key={project.id}>
                {tag}
              </li>
            ))}
          </ul>
          <h2>{project.projectName}</h2>
          <section>
            {project.liveDemo !== false
              ? <a href={project.liveDemo} target="_blank">Live Demo</a>
              : <p href='#'>Live Demo Unavailable</p>
            }
            <a href={project.gitHub} target="_blank">Source Code</a>
          </section>
        </div>
      </article>
    </li>
  )
}
