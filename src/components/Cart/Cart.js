import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price* prd.quantity,0);
    let shippingCost = 0;
    if(totalPrice > 15){
        shippingCost = 4.99
    }
    else if(totalPrice > 0){
        shippingCost = 12.99
    }
    else if (totalPrice >35){
        shippingCost = 0
    }
    const tax = (totalPrice/10);
    const grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Item Ordered :{cart.length}</p>
            <p>Product Price : {totalPrice}</p>
            <p>Shipping Cost :{shippingCost}</p>
            <p><small>Tax + Vat :{tax}</small></p>
            <p>Total Price : {grandTotal}</p>
            
            
            
            <br/>
            {props.children}
        </div>
    );
};

export default Cart;