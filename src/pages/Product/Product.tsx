import React from 'react'
import "./Product.css"
import useStore from '../../store/store'
import { useParams } from 'react-router-dom';

// function Product() {
const Product:React.FC = () =>{
  const {items} = useStore()
  const { id } = useParams<{ id: string }>();
  const product = items.find((item) => item.id === id);

  if (!product) {
    return <div className="container">Товар не найден</div>;
  }
  return (
    <div className="container product_container">
      <div className="product_image">
        <img src={product.image_path} alt={product.name} />
      </div>
      <div className="product_details">
        <h1>{product.name}</h1>
        <p className="product_category">Категория: {product.category}</p>
        <p className="product_description">{product.description}</p>
        <div className="product_specs">
          <h2>Характеристики:</h2>
          <ul>
            <li>Тип дерева: {product.wood_type}</li>
            <li>Отделка: {product.finish}</li>
            <li>Глубина: {product.dimensions.depth} см</li>
            <li>Ширина: {product.dimensions.width} см</li>
            <li>Высота: {product.dimensions.height} см</li>
            <li>Вес: {product.weight} кг</li>
          </ul>
        </div>
        <p className="product_price">Цена: ${product.price}</p>
        <button className="add_to_cart">Добавить в корзину</button>
      </div>
    </div>

  )
}

export default Product