import './App.sass';
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import NewsArticle from './components/NewsItem/NewsItem';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<News />} />
          <Route path='/articles/:name' element={<NewsArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
