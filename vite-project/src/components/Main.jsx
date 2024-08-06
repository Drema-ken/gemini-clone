import React, {useState} from 'react';
import './Main.css';
import user from '../assets/gemini/user.jpg';
import gemini from '../assets/gemini/gemini.png';
//import voice from '../assets/gemini/voice.png';
import { feature } from './features';
import Features from './Features.jsx';
import run from '../Api/config.js';
import send from '../assets/gemini/send.png';


const Main = () => {
   const data = feature.map(({img,text},index) =>{
     return <Features img={img}
                      text={text}
                      key={index}/>
   })
   const [input,setInput] = useState('');
   const [prompt,setPrompt] = useState(false);
   const [result,setResult] = useState('');
   const [showResult,setShowResult] = useState(false);
   const [recentPrompt,setRecentPrompt] = useState('');

   const getResponse = async () =>{
    if(input){
      setShowResult(false);
      setResult('');
      setPrompt(true)
      setRecentPrompt(input);
      setInput('');
      await run(input).then(res => {setResult(res); setShowResult(true)});
    }
   }
  return (
    <div className='container'>

        <header>
            <div className="logo">
                <img src={gemini}/>
                <h3>Gemini</h3>
            </div>
            <img src={user}/>
        </header>


     { !prompt?
        <div className="content">

            <div className="greeting">
                <h1 className='main'>Hello, Dev.</h1>
                <h1>How can I help you?</h1>
            </div>

            <div className="features">            
                     {data}
                     <div className='responsive'>
                <div className="searchbox">
                    <input placeholder='Enter a prompt' autoFocus onChange={(e)=> setInput(e.target.value)} value={input}/>
                    <div className="searchbox-img">
                        <img src={send} onClick={() => {getResponse()}}/>
                    </div>
                </div>
                 <p className="disclaimer">Gemini may provide inaccurate results. Be sure to confirm your results</p>
             </div>
            </div>

        </div>: 
        <div className="chat-UI">
            <div className="prompt">
                <img src={user}/>
                <p>{recentPrompt}</p>
            </div>

            <div className="result">
                <img src={gemini}/>

                <p>{showResult? result: 
                    <>
                        <hr/>
                        <hr/>
                        <hr/>
                        <section className='something'>
                        <div className="searchbox">
                <input placeholder='Enter a prompt' autoFocus onChange={(e)=> setInput(e.target.value)} value={input}/>
                <div className="searchbox-img">
                    <img src={send} onClick={() => {getResponse()}}/>
                </div>
            </div>
             <p className="disclaimer-resp">Gemini may provide inaccurate results. Be sure to confirm your results</p>
             </section>    
                    </>
                    
                    }</p>
            </div>
            
        </div>
}

        <footer>
            <div className="searchbox">
                <input placeholder='Enter a prompt' autoFocus onChange={(e)=> setInput(e.target.value)} value={input}/>
                <div className="searchbox-img">
                    <img src={send} onClick={() => {getResponse()}}/>
                </div>
            </div>
             <p className="disclaimer">Gemini may provide inaccurate results. Be sure to confirm your results</p>
        </footer>

       
       
    </div>
  )
}

export default Main
