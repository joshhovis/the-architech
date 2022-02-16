import './Navbar.sass'
import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'


const Navbar = () => {
    // const ScrollLink = Scroll.ScrollLink
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top'>
                <div className='container-fluid'>

                    <img src="https://img.icons8.com/ios/50/000000/steve-jobs.png" width="55" height="55" />
                    <Link to='/' className='navbar-brand'><h3 className='navbar-title'>The Architech</h3></Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#collapse-nav" aria-controls="collapse-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='collapse-nav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link active' aria-current='page'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <ScrollLink to='trending' smooth={true} duration={600} offset={-80} className='nav-link'>Trending</ScrollLink>
                            </li>
                            <li className='nav-item'>
                                <ScrollLink to='recent' smooth={true} duration={600} offset={-80} className='nav-link'>Recent</ScrollLink>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar