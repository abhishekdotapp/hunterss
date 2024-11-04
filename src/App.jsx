import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import './App.css'
import Hunters from "./Hunters.jsx"
import ReactGA from 'react-ga4'


function App() {

  



return (
  <div >
    <Hunters />
    <Helmet>
      <title>HackHive</title>
      <meta name="description" content="Join us for the Indore Hackathon 2024! Collaborate with talented developers, designers, and entrepreneurs to create innovative solutions."/>
        <meta name="keywords" content="Indore Hackathon, hackathon 2024, coding competition, tech event, innovate, collaborate, software development, programming, Indore events"/>

      
        <meta property="og:title" content="Indore Hackathon 2024 | Innovate, Collaborate, Win!" />
        <meta property="og:description" content="Join us for the Indore Hackathon 2024! Collaborate with talented developers, designers, and entrepreneurs to create innovative solutions." />
        <meta property="og:image" content="URL_to_image.jpg" /> 
        <meta property="og:url" content="https://www.yourhackathonwebsite.com" /> 
        <meta property="og:type" content="website" />

        
        <meta name="twitter:title" content="Indore Hackathon 2024 | Innovate, Collaborate, Win!"/>
        <meta name="twitter:description" content="Join us for the Indore Hackathon 2024! Collaborate with talented developers, designers, and entrepreneurs to create innovative solutions."/>
    

        
        <meta name="author" content="Indore Hackathon Team"/>
        <meta name="robots" content="index, follow"/>
    </Helmet>
  </div>
);

}

export default App
