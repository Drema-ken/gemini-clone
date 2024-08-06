import React, { useContext } from 'react';
import hamburger from '../assets/gemini/hamburger.png';
import './Sidebar.css';
import setting from '../assets/gemini/setting.png';
import world from '../assets/gemini/world.png';
import plus from '../assets/gemini/plus.png';
import message from '../assets/gemini/message.jpg';



const Sidebar = ({mini,set}) => {

  
  return (
    <div className={`sidebar ${!mini? 'mini': ''}`}>
        <div className="top">
           <img src={hamburger} onClick={()=>{set(prev => !prev);}} />
           <img src={plus}/>
           <h5>Recent</h5>
           <div className="recent">
              <img src={message}/>
              <p>Recent</p>
           </div>
        </div>
        <div className="bottom">
          <img src={world} alt="" />
          <img src={setting} alt="" />
        </div>
    </div>
  )
}

export default Sidebar
