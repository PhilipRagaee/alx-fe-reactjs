import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/profile/*" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile />
          </ProtectedRoute>
} />
      </Routes>
    </Router>
  );
};

export default App;
