import React, { useState } from 'react'
import "./Product.css"
import useStore from '../../store/store'
import { useParams } from 'react-router-dom';

// function Product() {
const Product:React.FC = () =>{
  const {items} = useStore()
  const { id } = useParams<{ id: string }>();
  const product = items.find((item) => item.id === id);
  // const [isLiked, setIsLiked] = useState(false);
	const {toggleFavorite, orders} = useStore()

  if (!product) {
    return <div className="container">Товар не найден</div>;
  }

  const isLiked = orders.some((order) => order.id === product.id);
  // const handleLike = () => {
  //   setIsLiked(!isLiked);
  //   addOrder(product);
  // };
  const handleToggleFavorite  = () => {
    toggleFavorite(product)
  };


  return (
    <div className="container product_container ">
      <div className='row'>
      <div className="product_image col-7">
        <img src={product.image_path} alt={product.name} />
      </div>
      <div className="product_details col-5">
        <h1>{product.name}</h1>
        <p className="product_category">Category: {product.category}</p>
        <p className="product_description">{product.description}</p>
        <div className="product_specs">
          <h2>Charackteristics:</h2>
          <ul>
            <li>Wood type: {product.wood_type}</li>
            <li>Finish: {product.finish}</li>
            <li>Depth: {product.dimensions.depth} см</li>
            <li>Width: {product.dimensions.width} см</li>
            <li>Height: {product.dimensions.height} см</li>
            <li>Weight: {product.weight} кг</li>
          </ul>
        </div>
        <p className="product_price">Price: ${product.price}</p>
        <div className={`add_to_likely_btn ${isLiked ? 'active' : ''}`}
          // onClick={handleLike}
          onClick={handleToggleFavorite}
        >{isLiked ? 'Удалить из избранного' : 'Добавить в избранное'}</div>
        {/* <div className='btn_to_products'> Вернуться на главную</div> */}
      </div>
      </div>
    </div>

  )
}

export default Product