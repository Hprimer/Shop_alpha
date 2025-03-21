import React, { useState } from 'react'
import { BiSolidLike } from "react-icons/bi";

import './item.css'
import { Link } from 'react-router-dom';

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

	const handleLike = () => {
	  setIsLiked(!isLiked);
	};

	return (
		
		<div className='item col-12 col-md-4 col-lg-3 '>
			<Link to='/Product/'  className='item_link'>
				{/* <img src={process.env.PUBLIC_URL + "/imgs/" + props.item.img}></img>*/} {/*чтобы из public папки брать фото */}
				<img src={item.image_path} alt={item.name}/>
				<h2 className='item-h2'> {item.name} </h2>
				<p>{item.wood_type}, {item.finish} finish</p>
				{/* <div className='block_item'>
					<b>{item.price}$</b>
					<div className='like'><BiSolidLike/></div>
				</div> */}
				<b>{item.price}$</b>
				<div className={`like ${isLiked ? 'active' : ''}`} 
					onClick={(e) => {
					e.stopPropagation(); // Блокирует переход
					handleLike();
					}}
				><BiSolidLike/>
				</div>
				{/* <div className='btn_add' onClick={() => onAdd(item)}> + </div> */}
				{/* <div className='like'><BiSolidLike/></div> */}
			</Link>
			
		</div>

	)
}

export default Item
