import React from 'react'
import Item from '../Item/Item'

import './items.css'
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
interface ItemsProps {
  items: Product[];
  onAdd: (product: Product) => void;
}
interface ItemProps {
	item:Product;
	onAdd: (product: Product) => void;
}
const Items: React.FC<ItemsProps> = ({items, onAdd}) =>{	
// function Items({items, onAdd}) {
	return (
		<main className='container'>
			<div className='items row'>
				{items.map(el => (
					<Item key = {el.id} item = {el} onAdd = {onAdd}/> 
				))}
			</div>
		</main>
	)
}

export default Items
