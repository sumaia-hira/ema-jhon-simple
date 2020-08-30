import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link> </h4>
            <br/>
            <p><small>by:{seller}</small></p>
    <h4>${price}</h4>
    <p><small>Only {stock} left in stock.order soon.</small></p>
    <button 
    onClick={() => props.handleAddProduct(props.product)}
    className='buy-btn'><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;