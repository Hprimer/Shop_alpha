import React from 'react'
import Presentation from '../../Components/Presentation/Presentation'
import Categories from '../../Components/Categories/Categories'
import Items from '../../Components/Items/Items'
import useStore from "./../../store/store";


// interface Product {
//   id: number;
//   name: string;
//   image_path: string;
//   desc: string;
// 	wood_type: string;
//   category: string;
//   price: string;  
// 	finish: string;
// }
// interface MainProps {
//   onChoose: (category: string) => void;
//   // items: Product[];
//   // onAdd: (product: Product) => void;
// }

// interface CategoriesProps {
//   onChoose: (category: string) => void;
// }
// interface ItemsProps {
//   items: Product[];
//   onAdd: (product: Product) => void;
// }

// const Main: React.FC<MainProps> = ({ onChoose, items, onAdd }) => {
const Main: React.FC = () => {
  // const { chooseCategory } = useStore();

	return (
		<>
			<Presentation/>
			<div className='categ_items container'>
				<Categories 
        // onChoose={chooseCategory} 
        />
				<Items 
        // items={currentItems} onAdd={addOrder} 
        />
			</div>
		</>
	)
}

export default Main
