import React from 'react';

const Features = ({img,text}) => {
 
  return (
    <div className='features-content'>
       <p>{text}</p>
       <img src={`/src/assets/gemini/${img}`}/>
    </div>
  )
}

export default Features
