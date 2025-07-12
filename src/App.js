import React, {useState} from "react";
import Navbar from '../src/components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about.js';
import Wide from '../src/pages/wide.js'
import Home from './pages';
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ah620.github.io/" element={ <Home /> } />
          <Route path="/ah620.github.io/wide" element={ <Wide /> } />
          <Route path="/ah620.github.io//about" element={ <About /> } />
        </Routes>
      </Router>
   );
}

export default App;

