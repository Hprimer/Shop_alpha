import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



import './Header.css'
import { Link } from 'react-router';
import useStore from '../../store/store';

const Header= () => {
  const { orders } = useStore();

	
  return (
    <header className='container'>
      <div className='containr navbarr'>
        <span className='logo col-4'>
<<<<<<< HEAD
          
=======
>>>>>>> dbac692 (add Shop_alpha/)
          <Link to='/Shop_alpha/products' className='link'>
            Happy House
          </Link>
        </span>
        
        <ul className='nav col-8'>
<<<<<<< HEAD
          <li className='header-links'>
            <Link to="/Shop_alpha/cart" className='link cart-link'>
              {/* <FaShoppingCart />  */}
              <FaHeart/>
=======
          <li className='cart-link'>
            <Link to="/Shop_alpha/cart" className='link'>
              <FaShoppingCart /> 
>>>>>>> dbac692 (add Shop_alpha/)
							 ({orders.length}) 
            </Link>
            <Link to='/Shop_alpha/create' className='link create-link'>
                <FaPlusCircle/>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

