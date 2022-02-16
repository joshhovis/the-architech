import './Navbar.sass'
import React from 'react'
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'


const Navbar = ({ theme, toggleTheme }) => {
    const themeStyle = theme === 'light' ? 'Light' : 'Dark'

    return (
        <div>
            <nav className='navbar navbar-expand-lg fixed-top'>
                <div className='container-fluid'>

                    <img src="https://img.icons8.com/ios/50/000000/steve-jobs.png" width="55" height="55" />
                    <Link to='/home' className='navbar-brand'><h3 id='navbar-title' className='navbar-title'>The Architech</h3></Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#collapse-nav" aria-controls="collapse-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='collapse-nav'>
                        <ul className='navbar-nav'>

                            <li className='toggle-mode'>
                                <button className='toggle-mode-button' onClick={toggleTheme}><span>Toggle {themeStyle} Mode</span></button>
                            </li>

                            <li className='nav-item'>
                                <Link to='/' className='nav-link' aria-current='page'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <ScrollLink to='categories' smooth={true} duration={600} offset={-100} className='nav-link'><span>Categories</span></ScrollLink>
                            </li>
                            <li className='nav-item'>
                                <ScrollLink to='trending' smooth={true} duration={600} offset={-80} className='nav-link'><span>Trending</span></ScrollLink>
                            </li>
                            <li className='nav-item'>
                                <ScrollLink to='recent' smooth={true} duration={600} offset={-80} className='nav-link'><span>Recent</span></ScrollLink>
                            </li>
                            <li className='nav-item'>
                                <ScrollLink to='footer' smooth={true} duration={600} className='nav-link'>About Us</ScrollLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Navbar