import React from 'react';
import './degine.css';

const Bottle = ({ bottle , handleCart  }) => {
    const { img, name, price, stock } = bottle;

  
    return (
      <div className="card">
        <img src={img} alt={name} className="card-img" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-price">${price}</p>
          <p className="card-stock">Stock: {stock}</p>
          <button onClick={()=> handleCart (bottle)}>Buy Now</button>
        </div>
      </div>
    );
  };
  
  export default Bottle;