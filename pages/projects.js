import React from 'react';
import ProjectList from '../components/ProjectList';
import projectStyles from '../styles/Project.module.css';

export default function projects({apiResults}) {
  return (
    <div>
      <header className={projectStyles.header}>
        <h1>Projects</h1>
        <ProjectList projects={apiResults} />
      </header>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/user/repos?per_page=100", {
    'method': 'GET',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': `token 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`,
    }
  });
  const apiResults = await res.json();
  return {
    props: {
      apiResults: apiResults.filter((project) => {
        return project.owner.login === 'luftedar'
        && project.topics.length !== 0})
        .map((project) => {
        return {
          id: project.id,
          url: project.html_url,
          name: project.name,
          language: project.language,
          topics: project.topics
        }
      })
    }
  };
};