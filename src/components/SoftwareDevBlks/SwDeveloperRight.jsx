import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from '../CommonButton/Button';

const SwDeveloperRight = ({pgm,fw,subhead,mainhead,para}) => {
  return (
    <div className='swDeveloper_right'>
            <div className='swDeveloper_right_head'>
                <p>{subhead}</p>
                <h2>{mainhead}</h2>
            </div>
            <p>{para}</p>
            <div className='technologies_cvr'>
                <div className='tech_left'>
                    <h5>Programming Languages</h5>
                    <ul> 
                    {pgm.map((key)=>{
                        return <li>{key}</li>
                    })}
                        
                    </ul>
                </div>
                <div className='tech_left'>
                    <h5>Frameworks</h5>
                    <ul> 
                    {fw.map((key)=>{
                        return <li>{key}</li>
                    })}
                        
                    </ul>
                </div>
            </div>
            <Button
            type="button"
            buttonStyle="btn--primary--solid"
            style={{ borderRadius: "0" }}
          >
            Get a Quote <AiOutlineArrowRight className="arrow" />
          </Button>
        </div>
  )
}

export default SwDeveloperRight