import React from 'react';
import langStyles from '../styles/ProjectLanguage.module.css';

const ProjectLanguage = ({language}) => {
  const langColor = {
    HTML: '#e34c26',
    Ruby: '#e34c26',
    JavaScript: '#f0db4f',
    PLpgSQL: '#008bb9',
  };
  console.log(langColor[language]);
  return (
    <p
    className={langStyles.language}
    style={
      {backgroundColor: langColor[language]}      
    }
    >
      {language}</p>
  )
}

export default ProjectLanguage