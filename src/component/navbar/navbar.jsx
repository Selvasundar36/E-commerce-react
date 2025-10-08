import React,{useState} from 'react'
import'./navbar.css'
import logo from '../assets/ss fasion logo 1.jpg'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import loginsignup from '../../pages/LoginSignup'
const Navbar = () => {
  const[menu,setMenu]=useState("shop");
  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>
          SS Fasion Zone
        </p>
      </div>
      <div className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop{menu==="shop"?<hr />:<></>}</Link></li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">Men{menu==="mens"?<hr />:<></>}</Link></li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women{menu==="womens"?<hr />:<></>}</Link></li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids{menu==="kids"?<hr />:<></>}</Link></li>
      </div>
      <div className="nav-login-cart">
       <Link to="/login"><button onClick={()=>{setMenu("login")}}>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar