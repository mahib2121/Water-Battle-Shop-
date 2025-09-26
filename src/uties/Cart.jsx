import React from "react";
import "./cart.css";

const Cart = ({ cart,handleRemoveCart}) => {
  const total = cart.reduce((sum, bottle) => sum + bottle.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((bottle) => (
          <div key={bottle.id} className="cart-item">
            <img src={bottle.img} alt={bottle.name} />
            
            <div className="cart-info">
              <p>{bottle.name}</p>
              <p>${bottle.price}</p>
            </div>
            <button onClick={()=>handleRemoveCart(bottle.id)}>X</button>

          </div>
        ))
      )}
      <div className="cart-total">Total: ${total}</div>
    </div>
  );
};

export default Cart;
