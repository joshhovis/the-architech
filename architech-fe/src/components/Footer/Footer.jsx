import './Footer.sass'
import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'


const Footer = () => {

    return (
        <div className='footer' name='footer'>
            <h2 className='footer-architech'>The Architech</h2>

            <div className='footer-links'>
                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/home'>Home</Link>
                    </h4>
                </div>

                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/mobile'>Mobile-Dev</Link>
                    </h4>
                </div>

                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/crypto'>Crypto</Link>
                    </h4>
                </div>

                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/artificial-intelligence'>Artificial Intelligence</Link>
                    </h4>
                </div>

                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/virtual-reality'>Virtual Reality</Link>
                    </h4>
                </div>

                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/computer-science'>Computer Science</Link>
                    </h4>
                </div>

                <div className='footer-div'>
                    <h4 className='footer-div-title'>
                        <Link className='footer-div-title-link' to='/cybersecurity'>Cybersecurity</Link>
                    </h4>
                </div>
            </div>

            <div className='footer-contact'>
                <p className='footer-contact-est'>
                    <cite className='text-muted'>est. 2022</cite>
                </p>
                <div className='footer-contact-icons'>
                    <a className='footer-contact-icons-link' href="https://github.com/joshhovis" target="_blank">
                        <span className="icon"><i className="fa fa-github"></i></span>
                    </a>
                    <a className='footer-contact-icons-link' href="https://www.linkedin.com/in/joshua-hovis/" target="_blank">
                        <span className="icon"><i className="fa fa-linkedin"></i></span>
                    </a>
                </div>
                <p className='footer-contact-est'>
                    <cite className='text-muted'>Joshua Hovis</cite>
                </p>
            </div>
        </div>
    )
}

export default Footer