import React from 'react';
import ProjectList from '../components/ProjectList';
import projectStyles from '../styles/Project.module.css';

export default function projects({ apiResults }) {
  return (
    <div>
      <header className={projectStyles.header}>
        <ProjectList projects={apiResults} />
      </header>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/user/repos?per_page=100', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token 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',
    },
  });
  const apiResults = await res.json();
  return {
    props: {
      apiResults: apiResults.filter((project) => project.owner.login === 'luftedar'
        && project.topics.length !== 0
        && project.name !== 'decode-morse-code'
        && project.name !== 'hellorails'
        && project.name !== 'hello-react-rails').map((project) => ({
        id: project.id,
        url: project.html_url,
        name: project.name,
        language: project.language,
        topics: project.topics,
      })),
    },
  };
};
