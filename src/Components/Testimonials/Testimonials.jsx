import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.png'

import user_2 from '../../assets/user-2.png'

import user_3 from '../../assets/user-3.png'

import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward}></img>
            <img src={back_icon} alt='' className='back_btn' onClick={slideBackward}></img>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1}></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Educity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best decision's I've ever made</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2}></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Educity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best decision's I've ever made</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3}></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Educity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best decision's I've ever made</p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4}></img>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Educity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best decision's I've ever made</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials