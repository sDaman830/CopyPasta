import React from 'react'
import {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar=()=>{

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='headercompo'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h1>Conference</h1>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Speakers</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Committee</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Awards</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar