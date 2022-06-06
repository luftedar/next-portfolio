import React from 'react';
import Image from 'next/image';
import MainProjectsList from './MainProjectsList';

const Projects = () => {
  return (
    <div>
      <hgroup>
        <h2>My <span><p>Projects</p></span></h2>
      </hgroup>
      <article>
        <MainProjectsList />
      </article>
      <div>
        <button>See All Projects <span>
          <Image src="/see-more.png" width="14px" height="14px" />
        </span></button>
      </div>
    </div>
  )
}

export default Projects