import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="Footer Logo" />
      
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About Us</li>
        <li>Contact</li>
        
      </ul>
    <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icon-container">     
            <img src={pintester_icon} alt="Pintester" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>© 2025 SS Fashion Zone. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer