"use client"
import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Button from './Button';


const Cart = ({cartToggle}) => {
  const { theme} = useTheme();
  const { 
    cart, 
    getTotalAmount,
    removeFromCart,
    clearCart,
    getTotalQuantityForAllItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
 
  const handleIncrease = (ID) => {
    const ItemId = ID;
    increaseQuantity({ id: ItemId });
  };

  const handleDecrease = (ID) => {
    const ItemId = ID;
    decreaseQuantity({ id: ItemId });
    
  };
  const handleClearSingleItem = (ID)=>{
   
   // Assuming you have an item ID to remove, replace 'yourItemId' with the actual item ID
   const ItemId = ID;
    
   // Call removeFromCart with the item ID
   removeFromCart({ id: ItemId });
  }
  const handleClearingCart = ()=>{
    clearCart()
  }
  const totalQuantityForAllItems = getTotalQuantityForAllItems();

  return (
  <>
    <section className={` lexend ${cartToggle ? 'hidden' : 'block'} rounded-lg  fixed top-[5rem] right-0 md:right-5 p-3  md:p-5  ${theme === 'light' ? "text-white bg-black border-slate-500" : "text-black bg-white border-white"} ` }>
      
      <div className={`w-[210px]  md:w-[260px] flex flex-wrap justify-center gap-2 ${theme === 'light' ? "text-white  bg-black" : "text-black border-white bg-white"} `}>
      {cart?.length === 0 ? (
        <p className={`${theme === 'light' ? "text-white" : "text-black"} font-bold`}>Your cart is empty</p>
      ) : (
      
        cart.map((item,index) => (
          <div key={index} className={`${theme === 'light' ? "text-white border-slate-500" : "text-black border-white"} ${item?.highlight === true ? "bg-blue-500 text-white" : "bg-white bg-opacity-5"  
        } price-card-morph-cart  w-[70px] p-1 text-[10px] shadow-2xl`}>
              
            <div className={`font-bold text-[0.580rem] leading-[0.8rem] text-center`}>{item?.pack}</div>
            <div className={`text-center text-[0.550rem] leading-[0.7rem]`}>{item?.valPrep}</div>
            
            <div className={`${item?.highlight  === true && "text-white" } text-blue-500 text-center font-bold`}>{item?.value}</div>
            <div className='flex items-center justify-center flex-row gap-3 font-bold'>
              <span className='cursor-pointer text-[0.550rem] leading-[0.7rem] font-bold' onClick={()=>handleDecrease(item?.id)}>-</span>
              <span className='cursor-pointer text-[0.550rem] leading-[0.7rem] font-bold' onClick={()=>handleIncrease(item?.id)}>+</span>
              <span className='cursor-pointer text-[0.550rem] leading-[0.7rem] font-bold' onClick={()=>handleClearSingleItem(item?.id)}>c</span>
            </div>
            {/* Add other cart item details as needed */}
          </div>
        ))
        
      )}
      </div>
      <div  className={`${theme === 'light' ? "text-white" : "text-black "} flex gap-4 text-[10px] font-bold`}>
      <div>
        <p className={` mt-4  text-[0.550rem] leading-[0.7rem]`}>Total Amount: €{Number(getTotalAmount().toFixed(2))}</p>
        <Button className={`text-[0.550rem] leading-[0.7rem] ${Number(getTotalAmount().toFixed(2)) === 0 ? "hidden" : "block"} mt-4 border-none bg-red-300 text-[10px]`} onClick={handleClearingCart} text='Clear Cart' />
      </div>
      <div className=''>
        <p className='mt-3 text-[0.550rem] leading-[0.7rem]'>
        {cart?.length === 0 ? (<span></span>)
         :
         ( <span>{cart?.length === 1 ? "Package Selected:" : "Packages Selected:"}</span>)}
          
          </p>
        <ul >
        {totalQuantityForAllItems &&
            Object.entries(totalQuantityForAllItems).map(([itemId, { quantity, name }]) => (
              <li className='flex justify-between text-[0.550rem] leading-[0.7rem]' key={itemId}> 
              <span>{`${name} `} :</span>
              <span>{` ${quantity} `}</span>
              </li>
            ))}

        </ul>
      </div>
      </div>
  </section>
  </>
  );
};

export default Cart;
