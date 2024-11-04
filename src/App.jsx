import { useState } from 'react'

import './App.css'
import Hunters from "./Hunters.jsx"
import ReactGA from 'react-ga'



function App() {
  useEffect(() => {
        ReactGA.initialize('G-5KSKGREJXQ');
        ReactGA.pageview(window.location.pathname + window.location.search);

          }, []);
  
  return (
    <div >
       <Hunters />
    </div>
  );

}

export default App
