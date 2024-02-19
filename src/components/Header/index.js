import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import "./index.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const increaseNotifications = () => {
    setNotifications(notifications + 1);
  }

  return (
    <header className={darkMode ? 'dark' : ''}>
      <div className="logo-container">
        <h1>AdaptNxt</h1>
      </div>
      <div className="menu">
        <button onClick={increaseNotifications}>
          <FaBell />
          {notifications > 0 && <span className="badge">{notifications}</span>}
        </button>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <button onClick={toggleDarkMode}>
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
