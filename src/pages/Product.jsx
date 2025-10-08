import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Breadcrum from '../component/Breadcrum/Breadcrum';
import Productdisplay from '../component/productdisplay/productdisplay';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => String(e.id) === (productId));
 
  return (
<div>
  
  <Breadcrum product={product}/>
  <Productdisplay product={product}/>
  
</div>

  )
}

export default Product