import React from 'react'

const Team = ({img,name,desig}) => {
  return (
    <div className="team_members" >
        <img src={img} alt="team img"   />
        <h3 >{name}</h3>
        <p >{desig}</p>
    </div>
  )
}

export default Team 