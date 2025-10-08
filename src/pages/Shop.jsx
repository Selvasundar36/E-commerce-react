import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/popular'
import Offers from '../component/Offers/Offers'
import Newcollection from '../component/Newcollection/Newcollection'
import Newsletter from '../component/NewsLetter/Newsletter'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Newcollection/>
        <Popular/>
        <Offers/>
        
        <Newsletter/>
       
        
    </div>
  )
}

export default Shop