import React, { useState } from 'react'
import { BiSolidLike } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

import './item.css'
import { Link } from 'react-router-dom';
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
interface ItemProps {
	item:Product;
	onAdd: (product: Product) => void;
}
const Item: React.FC<ItemProps> = ({item, onAdd}) =>{	
// function Item({item, onAdd}) {
	// const imgPath = require(`./img/${props.item.img}`).default;
	const [isLiked, setIsLiked] = useState(false);
	const {deleteItem, addOrder} = useStore()

	// const handleLike = () => {
	//   setIsLiked(!isLiked);
	// };
	// const handleLike = (e: React.MouseEvent) => {
  //   e.stopPropagation(); // Останавливаем всплытие события
  //   setIsLiked(!isLiked);
	// 	addOrder(item);
  // };
  const stopTransition = (e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  };
  const handleLike = (e: React.MouseEvent) => {
    stopTransition(e, () => {
      setIsLiked(!isLiked);
      addOrder(item);
    });
  };
	const handleDelete = (e: React.MouseEvent) => {
    stopTransition(e, () => {
      deleteItem(item.id);
    });
  };

	return (
		<div className='item col-12 col-md-4 col-lg-3 '>
			<Link to='/Product/'  className='item_link'>		
				<img src={item.image_path} alt={item.name}/>
				<h2 className='item-h2'> {item.name} </h2>
				<p>{item.wood_type}, {item.finish} finish</p>
				<p><b>{item.price}$</b></p>
			{/* </Link> */}
				<div className={`like ${isLiked ? 'active' : ''}`} 
					onClick={handleLike}
				><BiSolidLike/>
				</div>
				<div className='delete-item_btn'
				  onClick={handleDelete}
				><FaTrash/>
				</div>

			
			</Link>
		</div>

	)
}

export default Item
