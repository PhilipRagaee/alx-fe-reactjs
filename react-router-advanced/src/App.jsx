// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';



function App() {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <Router>
    <div>
      <nav>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile/*"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
