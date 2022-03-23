import React from 'react';
import './Footer.css'
import Logo from './Assets/logo.png'
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className="footer__container">
                    <div className="Footer__logo">
                        <a href="">
                            <img src={Logo} alt="" className='footer__logo--img'/>
                        </a>
                    
                        <div class="footer__lists">
                        <div class="footer__list">
                            <h5 class="footer__heading--h5">Main</h5>
                            <ul class="footer__headings">
                                <li class="footer__text"><a class="footer__text--a" href="" >Blog</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >FAQS</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >Support</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >About Us</a></li>
                            </ul>
                        </div>
                        <div class="footer__list">
                            <h5 class="footer__heading--h5">Main</h5>
                            <ul class="footer__headings">
                                <li class="footer__text"><a class="footer__text--a" href="" >Blog</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >FAQS</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >Support</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >About Us</a></li>
                            </ul>
                        </div>
                        <div class="footer__list">
                            <h5 class="footer__heading--h5">Main</h5>
                            <ul class="footer__headings">
                                <li class="footer__text"><a class="footer__text--a" href="" >Blog</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >FAQS</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >Support</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >About Us</a></li>
                            </ul>
                        </div>
                        <div class="footer__list">
                            <h5 class="footer__heading--h5">Main</h5>
                            <ul class="footer__headings">
                                <li class="footer__text"><a class="footer__text--a" href="" >Blog</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >FAQS</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >Support</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >About Us</a></li>
                            </ul>
                        </div>
                        <div class="footer__list">
                            <h5 class="footer__heading--h5">Main</h5>
                            <ul class="footer__headings">
                                <li class="footer__text"><a class="footer__text--a" href="" >Blog</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >FAQS</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >Support</a></li>
                                <li class="footer__text"><a class="footer__text--a"href="" >About Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__divider"></div>
                    <div class="footer__logos">
                        <p class="footer__copyright">&copy; 2022 Open Study College All Rights Reserved.</p>
                        <div class="social__media--tags">
                            <div class="tag--wrapper">
                            <a href="" class="social__media--tag"><FaFacebookSquare /></a>
                            </div>
                            <div class="tag--wrapper">
                            <a href="" class="social__media--tag"><FaTwitterSquare /></a>
                            </div>
                            <div class="tag--wrapper">
                            <a href="" class="social__media--tag"><FaYoutube /></a>
                            </div>
                        </div>
                        
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;
