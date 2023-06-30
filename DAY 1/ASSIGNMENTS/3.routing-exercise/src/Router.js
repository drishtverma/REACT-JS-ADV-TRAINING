import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Department from './components/Department';
import Employee from './components/Employee';
import Project from './components/Project';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Employee />} />
      <Route path='/department' element={<Department />} />
      <Route path='/project' element={<Project />} />
    </Routes>
  );
};

export default Router;
