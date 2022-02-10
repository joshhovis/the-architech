import './App.sass';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
