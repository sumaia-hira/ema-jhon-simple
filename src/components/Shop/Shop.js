import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
  const [products, setProducts]= useState(first10);
  const [cart, setCart] = useState([]);
  useEffect(()=> {
      const savedCart = getDatabaseCart();
      const productKeys = Object.keys(savedCart);
      const previousCart =productKeys.map(existingKey =>{
          const product = fakeData.find(pd => pd.key === existingKey);
          product.quantity = savedCart[existingKey];
          return product;
      })
      setCart(previousCart);
  },[])

   const handleAddProduct = (product) =>{
    const addedKey = product.key;
const sameProduct = cart.find(pd => pd.key === addedKey);
let count = 1;
let newCart;
if(sameProduct){
    count = sameProduct.quantity + 1;
    sameProduct.quantity=count;
    const other = cart.filter(pd => pd.key !== addedKey);
    newCart = [...other,sameProduct];
}
else {
    product.quantity = 1;
    newCart = [...cart,product];
}

setCart(newCart);
addToDatabaseCart(product.key,count);
   }  
    return (
        <div className='shop-container'>
           <div className="product-container">
           {
                   products.map(product => <Product 
                   key={product.key}
                   detailAddBtn={true}
                   handleAddProduct = {handleAddProduct}
                   product={product}></Product>)
               }
       
           </div>
           <div className="cart-container">
               <Cart cart={cart}
             ><Link className='checkOut-btn' to="/review">Review Order</Link></Cart>
           </div>
          
        </div>
    );
};

export default Shop;