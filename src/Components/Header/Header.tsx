import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import './Header.css'
import { Link } from 'react-router';
import useStore from '../../store/store';

interface Product {
  id: number;
  name: string;
  image_path: string;
  desc: string;
	wood_type: string;
  category: string;
  price: string;  
	finish: string;
}

// interface HeaderProps {
//   orders: Product[];
//   onDelete: (id: number) => void;
// }


// const Header: React.FC<HeaderProps> = ({ orders }) => {
const Header: React.FC = () => {
  const { orders } = useStore();

	
  return (
    <header className='container'>
      <div className='containr navbarr'>
        <span className='logo col-4'>
          <Link to='/products' className='link'>
            Happy House
          </Link>
        </span>
        
        <ul className='nav col-8'>
          <li className='cart-link'>
            <Link to="/cart" className='link'>
              <FaShoppingCart /> 
							 ({orders.length}) 
							{/* {FaShoppingCart && <FaShoppingCart />}
              {orders.length > 0 && `(${orders.length})`} */}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;






// const Header: React.FC<HeaderProps> = ({ orders, onDelete }) => {
// 	return (
// 	<header className='container'>
// 		<div className='containr  navbarr'>
// 			<span className='logo col-4'>
// 				<Link to='/' className='link'>
// 					Happy House
// 				</Link>
// 			</span>
			
// 			<ul className='nav col-8'>
// 				<li className='cart-link'>
// 					<Link to="/cart" className='link'><FaShoppingCart/>({orders.length})</Link>
			
// 					{/* // onClick={() => setCartOpen(cartOpen = !cartOpen)} 
// 					// className={`shop-cart-btn ${cartOpen && 'active'}`}/> */}
// 					{/* ///если cartOpen - true, то применяется еще и класс актив */} 
// 				</li>
// 			</ul> 
// 		</div>
			
// 	</header>
// 	)
// }

// export default Header
