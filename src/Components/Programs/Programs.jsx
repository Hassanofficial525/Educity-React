import React from 'react'
import './Programs.css'
import program_01 from '../../assets/program-1.png'
import program_02 from '../../assets/program-2.png'
import program_03 from '../../assets/program-3.png'

import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_01} alt='program_1'></img>
            <div className='caption'>
              <img src={program_icon_1} alt='program_icon_1'></img>
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_02} alt='program_2'></img>
            <div className='caption'>
              <img src={program_icon_2} alt='program_icon_2'></img>
              <p>Master's Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_03} alt='program_3'></img>
            <div className='caption'>
              <img src={program_icon_3} alt='program_icon_3'></img>
              <p>Post Graduation </p>
            </div>
        </div>
    </div>

  )
}

export default Programs