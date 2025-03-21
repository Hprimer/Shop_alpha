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
          
          <Link to='/Shop_alpha/products' className='link'>
            Happy House
          </Link>
        </span>
        
        <ul className='nav col-8'>
          <li className='header-links'>
            <Link to="/Shop_alpha/cart" className='link cart-link'>
              {/* <FaShoppingCart />  */}
              <FaHeart/>
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

