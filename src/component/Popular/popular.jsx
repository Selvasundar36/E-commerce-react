import React from 'react'
import'./Popular.css'
import data_product from '../assets/data'
import datam_product from '../assets/datam'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular In WOMEN</h1>
        <hr />
        <div className="popular-item">
            {
                data_product.map((item,i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
        </div>
        <div className="popular2">
        <h1>Popular In MEN</h1>
        <hr />
        <div className="popular-item">
            {
                datam_product.map((item,i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
        </div>
        </div>
        
        
        
    </div>
  )
}

export default Popular