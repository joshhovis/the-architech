import React from 'react'
import './Categories.sass'
import { Link } from 'react-router-dom'

const CategoryButtons = () => {

    return (
        <div className='categories' name='categories'>
            <ul className='nav categories-nav'>
                <li className='nav-item categories-list'>
                    <Link to='/home' className='nav-link categories-link'><span>#</span> General</Link>
                </li>
                <li className='nav-item categories-list'>
                    <Link to='/mobile' className='nav-link categories-link'><span>#</span> Mobile-Dev</Link>
                </li>
                <li className='nav-item categories-list'>
                    <Link to='/crypto' className='nav-link categories-link'><span>#</span> Crypto</Link>
                </li>
                <li className='nav-item categories-list'>
                    <Link to='/artificial-intelligence' className='nav-link categories-link'><span>#</span> AI</Link>
                </li>
                <li className='nav-item categories-list'>
                    <Link to='/virtual-reality' className='nav-link categories-link'><span>#</span> VR</Link>
                </li>
                <li className='nav-item categories-list'>
                    <Link to='/computer-science' className='nav-link categories-link'><span>#</span> Comp-Science</Link>
                </li>
                <li className='nav-item categories-list'>
                    <Link to='/cybersecurity' className='nav-link categories-link'><span>#</span> Cybersecurity</Link>
                </li>
            </ul>
        </div>
    )
}

export default CategoryButtons