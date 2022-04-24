import React from 'react'
import topicStyles from '../styles/Topictag.module.css'

const TopicTag = ({topic}) => {
  return (
    <span className={topicStyles.topic}>{topic}</span>
  )
}

export default TopicTag