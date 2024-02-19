
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Shipping from './components/Shipping';
import Orders from './components/Orders';
import Channel from './components/Channel';
import Inventory from './components/Inventory';
import Header from './components/Header';
import "./App.css"



const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
