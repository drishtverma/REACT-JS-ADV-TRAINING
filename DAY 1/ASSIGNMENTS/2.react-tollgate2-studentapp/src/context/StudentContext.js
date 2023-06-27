import React, { createContext } from 'react';
import axios from 'axios';

const StudentContext = createContext();
const ContextProvider = ({ children }) => {
  const addStudent = (data) => {
    return axios
      .post('http://localhost:8000/student', data)
      .then((res) => res)
      .catch((err) => err);
  };
  const showStudent = (data) => {
    return axios
      .get('http://localhost:8000/student')
      .then((res) => res)
      .catch((err) => err);
  };
  return (
    <StudentContext.Provider value={{ addStudent, showStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export { ContextProvider, StudentContext };
