import React from 'react';
import ProjectList from '../components/ProjectList';
import secretKeyProvider from '../.env';

export default function projects({ apiResults }) {
  return (
    <div>
      <header>
        <ProjectList projects={apiResults} />
      </header>
    </div>
  );
}

export const getStaticProps = async () => {
  const res2 = await secretKeyProvider().then((secretKey) => {
    const res3 = fetch('https://api.github.com/user/repos?per_page=100', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${secretKey.token}`,
      },
    });
    return res3;
  });
  // console.log(res2);
  // const res = await fetch('https://api.github.com/user/repos?per_page=100', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `token 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`,
  //   },
  // });
  const apiResults = await res2.json();
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
