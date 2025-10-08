import React from 'react'
import './Offers.css'
import excludive_image from '../assets/offer_img1.png'
const Offers = () => {
  return (
    <div className='offers'>
      
        <div className='offers-left'>
         <h1 className='exclusive'>Exclusive</h1>
         <h1>Offers for You</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Shop Now</button>
      </div>
        <div className='offers-right'>
            <img src={excludive_image} alt='offer'/>    
            </div>
    </div>
  )
}

export default Offers