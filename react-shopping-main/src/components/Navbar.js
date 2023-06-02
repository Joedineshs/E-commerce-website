import React from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                Cart-zone
            </span>
            <div className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar