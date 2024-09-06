import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import Subcategory from './pages/Subcategory';
import Products from './pages/Products';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <div className="content-wrapper">
          <Sidebar />
          <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/subcategory" element={<Subcategory/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
