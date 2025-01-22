import React, {useState} from "react";
import Navbar from './components/navbar';
import Form from './components/form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test.js';
import About from './pages/about.js';
import Home from './pages';




function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />} />
          <Route path="/test" element={ <Test /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </Router>
   );
}





export default App;

