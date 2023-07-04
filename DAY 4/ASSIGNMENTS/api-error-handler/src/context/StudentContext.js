import React, { createContext, useState } from 'react';
import axios from 'axios';

const StudentContext = createContext();
const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const addStudent = (data) => {
    return axios
      .post('http://localhost:8000/student', data)
      .then((res) => res)
      .catch((err) => err);
  };

  const showStudent = () => {
    return axios
      .get('http://localhost:8000/student')
      .then((res) => setData(res.data))
      .catch((err) => err);
  };

  const updateStudent = (id, data) => {
    return axios
      .put(`http://localhost:8000/studen/${id}`, data)
      .then((res) => res)
      .catch((err) => err);
  };

  const deleteStudent = (id) => {
    return axios
      .delete(`http://localhost:8000/student/${id}`)
      .then((res) => res)
      .catch((err) => err);
  };
  return (
    <StudentContext.Provider
      value={{ data, addStudent, showStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export { ContextProvider, StudentContext };
