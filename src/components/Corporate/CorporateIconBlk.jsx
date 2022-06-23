import React from 'react'

const CorporateIconBlk = ({icon,title,bg}) => {
  return (
    <div className='iconBlock'>
        <div className='corporate_icon_bg' style={{background: `${bg}`}}>
            <img src={icon} alt="corporate icon" />
        </div>
        <h5>{title}</h5>
    </div>
  )
}

export default CorporateIconBlk