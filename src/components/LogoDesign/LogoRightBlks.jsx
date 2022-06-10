import React from 'react'

const LogoRightBlks = ({img,head,para}) => {
  return (
    <div className='logo_right_cover'>
        <img src={img} alt=""/>
        <h4>{head}</h4>
        <p>{para}</p>
    </div>
  )
}

export default LogoRightBlks