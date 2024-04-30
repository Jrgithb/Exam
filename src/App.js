import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


import {Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Home from './Views/Home';
import Whatshere from './Views/Whatshere';
import Education from './Views/Education';
import Booktickets from './Views/Booktickets';
import Bookhotel from './Views/Bookhotel';
import Login from './Views/Login';
import Register from './Views/Register';
import { DarkModeProvider } from './Components/NavBar/Accessibility/Darkmode';
import Dayvisit from './Components/NavBar/Visit/Dayvisit';
import Hotel from './Components/NavBar/Hotels/Hotel';
import Educational from './Components/Educational/Educational';
import Annual from './Components/Annual/Annual';
import Planvisit from './Components/NavBar/Visit/Planvisit';
import Footer from './Components/Footer/Footer';

// import { fetchData } from './Fastapi'; 
// import Darkmode from './Components/Accessibility/Darkmode';




function App() {

  return (
    <DarkModeProvider>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/What's here"  element={<Whatshere />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Book tickets" element={<Booktickets />} />
            <Route path="/Book a hotel" element={<Bookhotel />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dayvisit" element={<Dayvisit />} />
            <Route path="/Hotel" element={<Hotel />} />
            <Route path="/Educational" element={<Educational />} />
            <Route path="/Annual" element={<Annual />} />
            <Route path="/Plan" element={<Planvisit />} />




        </Routes>
        <Footer/>
        
   

    </div>
    </DarkModeProvider>
     
  );
}

export default App;
