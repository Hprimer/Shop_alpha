import React from 'react'
import Item from '../Item/Item'

import './items.css'
import useStore from '../../store/store';

interface Product {
  id: string;
  name: string;
  image_path: string;
  desc: string;
  wood_type: string;
  category: string;
  price: string;
  finish: string;
  description: string;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  weight: number;
}
// interface ItemsProps {
//   items: Product[];
//   onAdd: (product: Product) => void;
// }
// interface ItemProps {
// 	item:Product;
// 	onAdd: (product: Product) => void;
// }
const Items: React.FC = () =>{	

// const Items: React.FC<ItemsProps> = ({items, onAdd}) =>{	
// function Items({items, onAdd}) {
	const {items, currentItems, addOrder} = useStore();

	return (
		<main className='container'>
			<div className='items row'>
				{/* {items.map(el => ( */}
				{currentItems.map(el => (
					<Item key = {el.id} item = {el} onAdd = {addOrder}/> 
				))}
			</div>
		</main>
	)
}

export default Items
