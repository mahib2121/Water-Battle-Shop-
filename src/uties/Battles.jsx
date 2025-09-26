import React, { use, useEffect, useState } from 'react';
import Bottle from './Battle';
import './battles.css'
import { addToStoredCart, getStoreCart,removeFromCart } from './localstorage';
import Cart from './Cart';

const Battles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise)
    useEffect(()=>{
        const storedCartIDs =  getStoreCart()
        const storedCart=[]
        for (const id of storedCartIDs ){
            const cartBattle = bottles.find (bottles => bottles.id === id)
            if (cartBattle){
                storedCart.push(cartBattle)
            }
        }
        setCart(storedCart);
    } ,[bottles])
    const [cart,setCart]= useState([]);
    
    
    const handleCart=(bottle)=> {
        const newCart = [...cart , bottle ]
        setCart (newCart);
        addToStoredCart(bottle.id)
    } 

    const handleRemoveCart =id=>{
      
        const remainingCart=cart.filter(bottle=>bottle.id!==id) ////remove form cart step 1 
        setCart(remainingCart);
        removeFromCart(id);
    }

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p> Add to Cart : {cart.length}</p>
            <Cart cart = {cart} handleRemoveCart = {handleRemoveCart} ></Cart>
            <div className='card-grid'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleCart = {handleCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Battles;