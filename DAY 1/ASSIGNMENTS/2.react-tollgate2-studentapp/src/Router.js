import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import ShowStudent from './components/ShowStudent';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AddStudent/>} />
      <Route path='/show-student' element={<ShowStudent/>} />
    </Routes>
  );
};

export default Router;
