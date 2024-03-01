import logo from './logo.svg';
import './App.css';
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import SideBar from './Components/Dashboard/SideBar';
import React, { useState, useEffect } from 'react';
import Login from './Components/ProtectedRoutes/Login'; // Import the Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [display, setDisplay] = useState(false);

  const showMenu = () => {
    setDisplay(true);
  }

  const closeMenu = () => {
    setDisplay(false);
  }

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  // If the user is not logged in, render the Login component
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // If the user is logged in, render the Dashboard layout
  return (
    <div className="App">
      <DashboardLayout display={display} showMenu={showMenu} closeMenu={closeMenu} onLogout={handleLogout}>
        <SideBar closemenu={closeMenu} />
      </DashboardLayout>
    </div>
  );
}

export default App;
