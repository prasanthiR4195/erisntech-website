import React from 'react'
import './Left-Heading.css'

const LeftHeading = ({subHead,main}) => {
  return (
    <div className="team_left_head">
        <h4 className="sub-heading">{subHead}</h4>
        <h2>{main}</h2>
  </div>
  )
}

export default LeftHeading