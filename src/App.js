import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Faculty from './components/Faculty';
import Doubts from './components/Doubts';
import Login from "./components/login";
import SignUp from "./components/register";
// import Profile from "./components/profile";
import { auth } from "./components/firebase";
import { motion } from 'framer-motion';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Home = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center max-w-4xl mx-auto p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-[#6dc9d0] mb-6 drop-shadow-[0_0_25px_rgba(109,201,208,0.3)]"
      >
        Learn Anytime, Anywhere
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl text-white mb-8 drop-shadow-lg"
      >
        Your journey to knowledge starts here
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-300"
      >
        Access quality education from anywhere in the world
      </motion.p>
    </div>
  </div>
);

const NavMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await onLogout();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <div className="nav-menu">
      <button 
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <motion.div 
        className={`menu-items ${isOpen ? 'show' : ''}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        {user ? (
          <>
            {/* <Link to="/profile" className="menu-link">Profile</Link> */}
            <button onClick={handleLogoutClick} className="menu-link logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="menu-link">Login</Link>
            <Link to="/register" className="menu-link">Register</Link>
          </>
        )}
      </motion.div>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-[#6dc9d0] text-xl">Loading...</div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AppContent = ({ user, handleLogout }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      {!isAuthPage && <Sidebar />}
      <NavMenu user={user} onLogout={handleLogout} />
      <div className={`flex-1 ${!isAuthPage ? 'ml-[70px]' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/faculty" 
            element={
              <ProtectedRoute>
                <Faculty />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/doubts" 
            element={
              <ProtectedRoute>
                <Doubts />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Router>
      <AppContent user={user} handleLogout={handleLogout} />
    </Router>
  );
};

export default App; 