import React from 'react'

import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'




const Contact = () => {

  const [result,setresult]= React.useState("");

  const onSubmit = async (event) =>{
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    const res= await fetch("https://api.web3forms.com/submit", {
      method:"POST",
      body:formData
    }).then((res) =>res.json());

    if(res.success){
      console.log("Success", res)
      setResult(res.message)
      event.target.reset();
    }
    else{
      console.log("Failure", res)
      setResult(res.message)
    }
  }


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message<img src={msg_icon} ></img></h3>
            <p>Feel free to reach out to us through contact form or find our Contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt=''></img>Contact@GreateStack.dev</li>
                <li><img src={phone_icon} alt=''></img>+1 123-456--7890</li>
                <li><img src={location_icon} alt=''></img>77 Massachussets Ave, Cambridge<br></br> MA 02139, United States</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required></input>

            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your Phone No' required></input>

            <label>Write your messages</label>
            <textarea name="messages"  rows="6" placeholder='Enter your messages Here' required></textarea>

            <button type='Submit' className='btn dark-btn'>Submit Now <img src={white_arrow}></img></button>
          </form>

          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact