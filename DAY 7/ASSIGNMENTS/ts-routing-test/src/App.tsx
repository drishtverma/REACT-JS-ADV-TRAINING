import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
