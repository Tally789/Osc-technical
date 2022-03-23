import React from 'react';
import './Nav.css'
import Logo from './Assets/logo.png'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'

const Nav = () => {
        function openMenu(){
            document.body.classList += " menu--open"
        }
        function closeMenu(){
            document.body.classList.remove ("menu--open")
        }

    return (
        <div>
            <div className="nav__container">
                <div className="nav__row">
                    <a href="/">
                        <img src={Logo} alt="" className='logo__img'/>
                    </a>                
                    <ul className="nav__links">
                        <li className='nav__link'>Courses</li>
                        <li className='nav__link'>About Us</li>
                        <button className='nav__btn'>Contact Us</button>
                    </ul>
                    <button className='btn__menu' onClick={openMenu}>
                        <FaBars className='btn__bars'/>
                    </button>
                    <div className="menu__backdrop">
                        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                            <FaRegWindowClose />
                        </button>
                        <ul className="menu__links">
                            <li className="menu__list menu__link">
                            Home
                            </li>
                            <li className="menu__list menu__link">
                            Courses
                            </li>
                            <li className="menu__list menu__link">
                            About Us
                            </li>
                            <li className="menu__list menu__link">
                            Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
