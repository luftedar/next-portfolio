import React, { useState } from 'react';
import styles from '../styles/Skills.module.scss';
import SkillBar from './SkillBar';

const Skills = () => {
  const [showMoreState, setShowMoreState] = useState(false);
  const showMoreClick = () => {
    setShowMoreState(!showMoreState);
  };
  return (
    <section className={styles.skills}>
      <hgroup>
        <h2>Expert <span><p>IN</p></span></h2>
      </hgroup>
      <ul>
        <SkillBar skill={'JavaScript'} width={"80%"} showStatus={true} />
        <SkillBar skill={'HTML&CSS'} width={"100%"} showStatus={true} />
        <SkillBar skill={'React'} width={"90%"} showStatus={true} />
        <SkillBar skill={'Ruby on Rails'} width={"80%"} showStatus={true} />
        <SkillBar skill={'Next'} width={"70%"} showStatus={showMoreState} />
        <SkillBar skill={'Redux'} width={"100%"} showStatus={showMoreState} />
        <SkillBar skill={'Jest'} width={"70%"} showStatus={showMoreState} />
        <SkillBar skill={'Ruby'} width={"60%"} showStatus={showMoreState} />
        <SkillBar skill={'Postgresql'} width={"50%"} showStatus={showMoreState} />
        <SkillBar skill={'Rspec'} width={"80%"} showStatus={showMoreState} />
        <SkillBar skill={'Capybara'} width={"60%"} showStatus={showMoreState} />
        <SkillBar skill={'Selenium'} width={"60%"} showStatus={showMoreState} />
        <SkillBar skill={'Git'} width={"100%"} showStatus={showMoreState} />
        <SkillBar skill={'Pair Programming'} width={"100%"} showStatus={showMoreState} />
      </ul>
      <article>
        <button
          onClick={() => {
            showMoreClick();
          }}
        >See More Skills</button>
      </article>
    </section>
  )
}

export default Skills