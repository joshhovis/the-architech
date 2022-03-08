import './App.sass';
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import NewsArticle from './components/NewsItem/NewsItem';
import CategoryButtons from './components/Categories/Categories';
import Footer from './components/Footer/Footer';

import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'

function App() {

  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  // if (!componentMounted) {
  //   return <div />
  // };

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <CategoryButtons />
        <div>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<News category='tech' />} />
            <Route path='/mobile' element={<News category='mobile-development' />} />
            <Route path='/crypto' element={<News category='crypto' />} />
            <Route path='/artificial-intelligence' element={<News category='artificial-intelligence' />} />
            <Route path='/computer-science' element={<News category='computer-science' />} />
            <Route path='/virtual-reality' element={<News category='virtual-reality' />} />
            <Route path='/cybersecurity' element={<News category='cybersecurity' />} />


            <Route path='/tech/:name' element={<NewsArticle category='tech' />} />
            <Route path='/mobile-development/:name' element={<NewsArticle category='mobile-development' />} />
            <Route path='/crypto/:name' element={<NewsArticle category='crypto' />} />
            <Route path='/artificial-intelligence/:name' element={<NewsArticle category='artificial-intelligence' />} />
            <Route path='/computer-science/:name' element={<NewsArticle category='computer-science' />} />
            <Route path='/virtual-reality/:name' element={<NewsArticle category='virtual-reality' />} />
            <Route path='/cybersecurity/:name' element={<NewsArticle category='cybersecurity' />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
