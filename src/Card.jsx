import React, { useState, useEffect } from 'react';
import { FaRegWindowClose, FaGraduationCap, FaArrowRight } from 'react-icons/fa'
import { TiTick } from "react-icons/ti";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import './Card.css';

const Card = ({ item }) => {
    return (
        <div className='card__row'>
            <div className="card__container">
                    <div className="card__background1" >
                        <div className="close__icon iconx"><FaRegWindowClose /></div>
                        <div className="img__wrapper">
                            <img src={item.avatar} alt="" className='avatar'/>
                            <span className="avatat__icon "><TiTick fill='#ce3566'/></span>
                        </div>
                        <h3 className="name">{item.name}</h3>
                        <h4 className='title'>{item.title}</h4>
                        <div className="id__wrapper">ID: {item.student_id}</div>
                        </div>
                        <div className='small__info--card'>
                            <div className="small__info--card--half">
                                <span className="line__one">{item.enrolment_status}</span>
                                <span className='line__two'>ENROLMENT STATUS</span>
                            </div>
                            <hr />
                            <div className="small__info--card--half">
                                <span className="line__one">{item.completed_courses}</span>
                                <span className='line__two'>Completed Courses</span>
                            </div>
                        </div>
                        <div className="card__background2">
                            <div className="contact__details contact__wrapper">
                                <h4>CONTACT DETAILS</h4>
                                <span className="details">Email: {item.email}</span><br />
                                <span className="details">Tel: {item.telephone}</span>
                            </div>
                            <div className="contact__details contact__about ">
                                <h4>ABOUT ME</h4>
                                <span className="details">{item.profile_description}</span>
                            </div>
                            <div className="wrapper__container">
                                <div className='current--course__wrapper'>
                                    <div className="cap__icon"><FaGraduationCap /></div>
                                    <div className="course__wrapper">
                                        <h4 className='course__h4'>Current Course:</h4>
                                        <span className='line__two'>{item.course_title}</span>
                                    </div>
                                    <div className="arrow__icon icon"><RiArrowRightSLine /></div>
                                </div>
                                <div className="photos__wrapper">
                                    <div className="photos__row">
                                        <div className="photos__wrapper--heading">
                                            <h4 className='course__h4'>My Photos</h4>
                                            <div className="down__arrow icon"><RiArrowDownSLine /></div>
                                        </div>
                                        <div className="images">
                                            <div className="image__wrapper1">
                                                <img src={item.images} alt="" className='photo'/>
                                            </div> 
                                            <div className="images__right--side">
                                                <div className="image__wrapper2"><img src={item.images} alt="" className='photo '/></div>      
                                                <div className='image__wrapper3--4'>
                                                    <img src={item.images} alt="" className='image__3'/>
                                                    <img src={item.images} alt="" className='image__4'/>
                                                    <div className="image__right--arrow icon"><FaArrowRight fill='white' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    );
}

export default Card;
