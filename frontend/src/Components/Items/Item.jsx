import React from 'react'
import './Item.css'
import h from '../Assets/h.jpeg'
import g from '../Assets/h.jpeg'
import p from '../Assets/p.jpeg'
const Item = () => {
  return (
    <div className='item'>
      <div class="health">
      <p>Kannur</p>
      <p>Why step out when you can get everything delivered home with the tap of a button? Kannur’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</p>
            <img src={h} alt=""/>
            
        </div>
         <div class="grocery">
            <img src={g} alt=""/>
           
        </div>
        <div class="pick">
            
            <img src={p} alt=""/>
            
        
        </div>
     </div>
   
  )
}

export default Item
