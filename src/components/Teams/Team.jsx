import React from 'react'

const Team = ({img,name,desig}) => {
  return (
    <div style={{textAlign:"center",padding:"20px",flex:"20%"}}>
        <img src={`assets/about/${img}.png`} alt="team img" style={{marginBottom:"10px",width:"100px"}}  />
        <h3 style={{fontSize:" 18px",fontWeight: '700',marginBottom:'3px'}}>{name}</h3>
        <p style={{marginBottom: "0",fontSize: '13px',color: '#979797'}}>{desig}</p>
    </div>
  )
}

export default Team