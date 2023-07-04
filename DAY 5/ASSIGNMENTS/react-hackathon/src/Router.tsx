import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import Profile from './components/Profile';
import { FriendContextType, FriendsContext } from './context/FriendsContex';

const Router: React.FC = () => {
  const { localData } = useContext(FriendsContext) as FriendContextType;
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {localData && (
        <>
          <Route path='/dashboard' element={<Home />} />
          <Route path='/profile-details/:id' element={<Profile />} />
          <Route path='/friend-list' element={<FriendsList />} />
        </>
      )}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default Router;
