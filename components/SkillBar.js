import React from 'react'
import styles from '../styles/SkillBar.module.scss'

const SkillBar = ({ skill, width, showStatus }) => {
  return (
    <li className={styles.skillbar}
      style={{ width: `${width}` }}
      className={showStatus ? 'show' : 'hide'}
    >{skill}</li>
  )
}

export default SkillBar