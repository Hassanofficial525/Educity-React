import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img'></img>
            <img src={play_icon} alt='' className='play_icon'></img>
        </div>
        <div className='about-right'>
       <h3>About University</h3>
       <h2>NURTURIONG TOMMORROW's GENERATION</h2>
       <p>EMABR..........</p>
        </div>
    </div>
  )
}

export default About