import React from 'react';
import './Cart.css';

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

interface CartProps {
  orders: Product[];
  onDelete: (id: number) => void;
}
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

const Cart: React.FC<CartProps> = ({ onDelete, orders }) => {
  return (
    <div className='cart'>
      <h2>Корзина</h2>
      {orders.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <ul className='cart-list'>
          {orders.map((order) => (
            <li className='cart-item' key={order.id}>
              <img className='cart-item__img' src={order.image_path} alt={order.name} />
              <div className='cart-item__info'>
                <h3 className='cart-item__title'>{order.name}</h3>
                <p className='cart-item__price'>{order.price}$</p>
              </div>
              <button
                className='cart-item__delete-btn'
                onClick={() => onDelete(order.id)}
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