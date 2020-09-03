import React from 'react';

const ReviewItems = (props) => {
    const {name,quantity,price,key} =props.product;
    return (
        <div style={{marginLeft:'200px',borderBottom:'1px solid lightgrey'}}>
           <h3 >{name}</h3> 
           <h4>Quantity: {quantity}</h4>
           <h3>Price:${price}</h3>
           <button
           onClick={()=>props.removeItemBtn(key)} 
           className="buy-btn">Remove Item</button>
        </div>
    );
};

export default ReviewItems;