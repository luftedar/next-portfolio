import React from 'react'
import topicStyles from '../styles/Topic.module.css'

const Topic = ({topic}) => {
  return (
    <div className={topicStyles.topic}>{topic}</div>
  )
}

export default Topic