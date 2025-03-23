import React from 'react';
import './Cart.css';
import useStore from '../../store/store';
import { Link } from 'react-router-dom';

const Cart = () => {
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
                onClick={() => deleteOrder(order.id)}>
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