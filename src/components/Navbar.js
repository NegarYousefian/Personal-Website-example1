import React, {useState} from 'react'
import './Navbar.css'
import '../App.css' 
import {Link} from 'react-router-dom'
function Navbar() {
    const closeMobileMenu = () =>{
        setClick(false);
    }
    const handleClick = () => {
        setClick(!click);
    }
    const [click, setClick] = useState(false);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    Negar's Portfolio
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
