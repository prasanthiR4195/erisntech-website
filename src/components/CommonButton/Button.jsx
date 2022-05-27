import React from 'react';
import './Button.css';

const STYLES =[
  'btn--primary--solid',
  'btn--primary--cancel',
  'btn--primary--black', 
]

const Button = ({children, onClick, type,buttonStyle}) => {
const checkBtnStyles=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button className={`common_btn ${checkBtnStyles}`} onClick={onClick} type={type} >{children}</button>
  )
}

export default Button