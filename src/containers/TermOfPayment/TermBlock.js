import React from 'react'
import './TermBlock.css'

const TermBlock = ({title, desc,desc2}) => {
  return (
    <div className='term_block'>
            <h4>{title}</h4>
            <p>{desc}</p>
            <p>{desc2}</p>
    </div>
  )
}

export default TermBlock