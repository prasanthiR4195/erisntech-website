import React from 'react'
import classes from './Block2.module.css'


const Block2 = ({titleB,titleR,desc}) => {
  return (
    <div className={classes.wrap}>
        <h4>{titleB}<span>{titleR}</span></h4>
        <p>{desc}</p>
    </div>
  )
}

export default Block2