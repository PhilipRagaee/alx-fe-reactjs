// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/profile/*"
        element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}
      />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  </Router>
  );
}

export default App;
