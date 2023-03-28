import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name'></input>
            <label>Email</label>
            <input type="email" ></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='type your message here'/>
            <a href="https://mail.google.com/mail/u/0/?tab=mm#inbox"><button className='btn'>Submit</button></a>
        </form>
      
    </div>
  )
}

export default Form
