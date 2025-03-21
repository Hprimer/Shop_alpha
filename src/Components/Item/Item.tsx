import { BiSolidLike } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

import './item.css'
import { Link } from 'react-router-dom';
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
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  weight: number;
}
interface ItemProps {
	item:Product;
	onAdd: (product: Product) => void;
}
const Item: React.FC<ItemProps> = ({item, onAdd}) =>{	

	const {deleteItem,  deleteOrder, toggleFavorite, orders} = useStore()

  const stopTransition = (e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  };

	const handleDelete = (e: React.MouseEvent) => {
    stopTransition(e, () => {
      deleteItem(item.id);
			deleteOrder(item.id)
    });
  };
	const handleToggleFavorite  = (e: React.MouseEvent) => {
		stopTransition(e, () => {
			toggleFavorite(item);
		})
  };

	const isLiked = orders.some((order) => order.id === item.id);


	return (
		<div className='item'>
			<Link to={`/Shop_alpha/product/${item.id}`}  className='item_link'>		
				<img src={item.image_path} alt={item.name}/>
				<h2 className='item-h2'> {item.name} </h2>
				<p>{item.wood_type}, {item.finish} finish</p>
				<p className='item-price'><b>{item.price}$</b></p>
				<div className={`like ${isLiked ? 'active' : ''}`} 
					onClick={handleToggleFavorite}>				
					<BiSolidLike/>
				</div>
				<div className='delete-item_btn'
				  onClick={handleDelete}>
					<FaTrash/>
				</div>			
			</Link>
		</div>

	)
}

export default Item
