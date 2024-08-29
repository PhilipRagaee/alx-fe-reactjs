import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = true;

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile/*" element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  } />
</Routes>
  );
}

export default App;
