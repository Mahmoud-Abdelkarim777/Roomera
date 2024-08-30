import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailsProduct from './pages/DetailsProduct';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path='/DetailsProduct' element={<DetailsProduct/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
