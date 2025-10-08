import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'><p>Already have an account?</p> <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>

        </div>
      </div>
    </div>
  )
}

export default LoginSignup