import React from 'react'

import './item.css'

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

	return (
	
			<div className='item col-12 col-md-4 col-lg-3 '>
				{/* <img src={process.env.PUBLIC_URL + "/imgs/" + props.item.img}></img>*/} {/*чтобы из public папки брать фото */}
				<img src={item.image_path} alt={item.name}/>
				<h2 className='item-h2'> {item.name} </h2>
				<p>{item.wood_type}, {item.finish} finish</p>
				<b>{item.price}$</b>
				<div className='btn_add' onClick={() => onAdd(item)}> + </div>
			</div>

	)
}

export default Item
