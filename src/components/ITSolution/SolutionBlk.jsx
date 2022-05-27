import React from 'react'

export const SolutionBlk = ({img,title,desc}) => {
  return (
    <div className='solution_wrap'>
        <img src={img} alt="solution" />
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}
