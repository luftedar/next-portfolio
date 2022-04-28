import React from 'react'

const ProjectLanguage = ({language}) => {
  const langColor = {
    html: '#e34c26',
    ruby: '#e34c26',
    javascript: '#f0db4f',
    plpgsql: '#008bb9',
  };
  console.log(language);
  return (
    <div style={`background-color:{${langColor.language}}`}>{language}</div>
  )
}

export default ProjectLanguage