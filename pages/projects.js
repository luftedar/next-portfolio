import React from 'react'

const projects = ({userInfo}) => {
  console.log(userInfo);
  return (
    <div>projects</div>
  )
}
// getServerSideProps
// getStaticPaths
export const getStaticProps = async () => {
  const userInfo = [];
  await fetch("https://api.github.com/user/repos?per_page=100", {
    'method': 'GET',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': `token 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`,
    }
  }).then(res => res.json()).then(data => data.forEach((x) => {
    if(x.owner.login === 'luftedar') {
      console.log(x.topics)
      userInfo.push({
        url: x.git_url,
        name: x.name,
        language: x.language,
        topics: x.topics
      })
    }
  }));
  return {
    props: {
      userInfo
    }
  };
}


export default projects;