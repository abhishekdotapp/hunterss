import { useState, useEffect } from 'react'

import './App.css'
import Hunters from "./Hunters.jsx"
import ReactGA from 'react-ga4'
const gaId = 'G-DLND0RK08H'

ReactGA.initialize(gaId);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Button',
      label: 'Home Page Button',
    });
    alert('Button clicked!'); // For testing
  };


return (
  <div >
    <Hunters />
  </div>
);

}

export default App
