import React, { useContext } from 'react';
import './CSS/Shopcategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdownIcon from '../component/assets/dropdown_icon.png';
import Item from '../component/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      {/* Banner */}
      <img className='shop-category-banner' src={props.banner} alt="" />

      {/* Sorting Section */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>

      {/* Products */}
      <div className="shopcategory-products">
        {all_product
          .filter((item) => item.category === props.category) // ✅ dynamic filter
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      {/* Load More */}
      <div className="shopcategory-loadmore">
        EXPLORE MORE
      </div>
    </div>
  );
};

export default ShopCategory;
