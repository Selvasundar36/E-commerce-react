import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
import Product from '../../pages/Product'
const Breadcrum = (props) => {
    const { product } = props;
return (
  <div className='breadcrumb'>
    HOME {'>'} SHOP {'>'} {product.category} {'>'} {product.name}
  </div>
)
}

export default Breadcrum
    