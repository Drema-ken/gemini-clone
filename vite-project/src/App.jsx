import React, { createContext, useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Main from './components/Main';



const App = () => {
  const [mini,setMini] = useState(false);
  return (
        <>
            <Sidebar mini={mini} set={setMini}/>
            <Main/>
        </>
  )
}


export default App;
