import React from 'react'
import {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar=()=>{

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color,setColor]=useState(false) 
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    const closeMenu = () => setClick(false)

    return (
        <div className={color? 'headercompo headercompo-bg':'headercompo'}>
            <nav className='navbar'>
                <Link to="/" className='Navlogo'>
                    <h1>Conference</h1>
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/speakers" onClick={closeMenu}>Speakers</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/committee' onClick={closeMenu}>Committee</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/awards' onClick={closeMenu}>Awards</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' onClick={closeMenu}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar