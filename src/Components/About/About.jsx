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
       <h2>Nurturing Tommorrow's Leaders Today</h2>
       <p>Embark on a transformative educational journey with our University's comprehensive education programs. Our Cutting-edge curriculam is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education.
        <br></br>
        <br></br>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities. </p>
        </div>
    </div>
  )
}

export default About