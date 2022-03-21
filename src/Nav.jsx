import React from 'react';
import './Nav.css'
import Logo from './Assets/logo.png'

const Nav = () => {
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
                </div>
            </div>
        </div>
    );
}

export default Nav;
