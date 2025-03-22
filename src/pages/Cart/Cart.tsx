import React from 'react';
import './Cart.css';
import useStore from '../../store/store';
import { Link } from 'react-router-dom';

// interface Product {
  // id: string;
  // name: string;
  // image_path: string;
  // desc: string;
  // wood_type: string;
  // category: string;
  // price: string;
  // finish: string;
  // description: string;
  // dimensions: {
  //   depth: number;
  //   width: number;
  //   height: number;
  // };
  // weight: number;
// }

// interface CartProps {
//   orders: Product[];
//   onDelete: (id: number) => void;
// }
// const Cart: React.FC<CartProps> = ({ onDelete, orders }) => {
//   return (
//     <div className='cart'>
//       <h2>Корзина</h2>
//       {orders.length === 0 ? (
//         <p>Ваша корзина пуста</p>
//       ) : (
//         <ul className='cart_list'>
//           {orders.map((order) => (
//             <li className='cart_item' key={order.id}>
//               <img className='cart_item__img' src={order.img} alt={order.title} />
//               <div>
//                 <h3>{order.title}</h3>
//                 <p>{order.price}$</p>
//               </div>
//               <button onClick={() => onDelete(order.id)}>Удалить</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;

// const Cart: React.FC<CartProps> = ({ onDelete, orders }) => {
const Cart: React.FC = () => {
  const {orders, deleteOrder} = useStore();
  return (
    <div className='container cart'>
      <h2>Избранное</h2>
      {orders.length === 0 ? (
        <p>В избранном пусто</p>
      ) : (
        <ul className='cart-list'>
          {orders.map((order) => (
            <li className='cart-item' key={order.id}>
              <Link to={`/Shop_alpha/product/${order.id}`}>
                <img className='cart-item__img' src={order.image_path} alt={order.name} />
              </Link>

                <div className='cart-item__info'>
                <Link to={`/Shop_alpha/product/${order.id}`}>
                  <h3 className='cart-item__title'>{order.name}</h3>
                  <p className='cart-item__price'>{order.price}$</p>
                </Link>
                </div>
              <button
                className='cart-item__delete-btn'
                onClick={() => deleteOrder(order.id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;