import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import '../Shop/Shop'

const Header = () => {
    return (
        <div className='topLogo'>
         <img src={logo} alt=""/>
         <nav>
             <a href="/shop">shop</a>
             <a href="/review">order review</a>
             <a href="/inventory">manage inventory</a>
         </nav>
        </div>
    );
};

export default Header;