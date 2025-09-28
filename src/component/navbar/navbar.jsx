import React,{useState} from 'react'
import'./navbar.css'
import logo from '../assets/ss fasion logo 1.jpg'
import cart_icon from '../assets/cart_icon.png'
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
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr />:<></>}</li>
      </div>
      <div className="nav-login-cart">
        
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar