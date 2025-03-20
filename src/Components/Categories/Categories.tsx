import React, { useState } from 'react'

import './categories.css'

interface CategoriesProps {
  onChoose: (category: string) => void;
}
const Categories: React.FC<CategoriesProps> = ({ onChoose }) => {
  const [categories] = useState([
    { key: "all", name: "Все" },
    { key: "sofa", name: "Диваны" },
    { key: "lamp", name: "Лампы" },

		{ key: "garden", name: "garden" },
		{ key: "stool", name: "stool" },
		{ key: "chair", name: "chair" },
		{ key: "table", name: "table" },
		{ key: "matress", name: "matress" },
		{ key: "mirror", name: "mirror" },

  ]);
	return (
		<div className='categories container '>
			<div className='row'>
				{categories.map(el =>
					<div 
					key={el.key} className='category col' 
					onClick={() => onChoose(el.key)}> {el.name} </div>
				)}
			</div>			
		</div>
	)
}

export default Categories
