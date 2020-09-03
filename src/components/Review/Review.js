import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems';
import Cart from '../Cart/Cart';
import happy from '../../images/giphy.gif'

const Review = () => {
    
    const [cart,setCart] = useState([]);
    const [placeOrder,setPlaceOrder] =useState(false);


    const removeItemBtn = (productKey) => {
        console.log('Remove item');
        const newCart = cart.filter(pd=>pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    const checkOut =()=>{
       setCart([]);
       setPlaceOrder(true);
       processOrder();
    }
    useEffect(()=> {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product =fakeData.find(pd=>pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
       setCart(cartProducts);
    },[])
    let thankYou;
    if(placeOrder){
        thankYou = <img src={happy} alt=""/> 
    }
    return (
        <div className='shop-container'>
        <div className='product-container'>
        <h1>Cart items:{cart.length} </h1>
            {
                cart.map(product => <ReviewItems 
                removeItemBtn ={removeItemBtn}
                key={product.key}
                product={product}></ReviewItems>)
            }
            {thankYou}
        </div>
        <div className='cart-container'>
        <Cart cart={cart}>
        <button onClick={checkOut} className='checkOut-btn'>Checkout</button>
        </Cart>

        </div>
            
        </div>
    );
};

export default Review;