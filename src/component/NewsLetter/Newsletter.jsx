import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Subscribe to our Newsletter</h1>
      <p>Get the latest updates and offers.</p>
      <div>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter