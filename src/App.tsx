import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import useStore from "./store/store"; 

import Header from './Components/Header/Header';
import itemsData from './data/products'
import Items from './Components/Items/Items';
import Footer from './Components/Footer/Footer';
import Main from "./pages/main/Main";
import Registration from "./pages/Registration/Registration";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";

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

// interface HeaderProps {
//   orders: Product[];
//   onDelete: (id: number) => void;
// }

interface MainProps {
  onChoose: (category: string) => void;
  // items: Product[];
  // onAdd: (product: Product) => void;
}

interface CartProps {
  orders: Product[];
  onDelete: (id: number) => void;
}
  interface ApiResponse {
    data: Product[];
  }
const App: React.FC = () => {
  // const [items, setItems] = useState<Product[]>([]); // Все товары
  // const [currentItems, setCurrentItems] = useState<Product[]>([]); // Текущие товары на экране
  // const [orders, setOrders] = useState<Product[]>([]); // Корзина
  const { items, setItems, setCurrentItems, chooseCategory } = useStore();

  // Функция загрузки товаров
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://furniture-api.fly.dev/v1/products?limit=100&sort=name_asc");
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
        const data: ApiResponse = await response.json();
        setItems(data.data);
        setCurrentItems(data.data);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };
  
    fetchData();
  }, [setItems, setCurrentItems]);

  // // Фильтрация по категориям
  // const chooseCategory = (category: string) => {
  //   if (category === 'all') {
  //     setCurrentItems(items);
  //   } else {
  //     setCurrentItems(items.filter(el => el.category === category));
  //   }
  // };


  // // Удаление товара из корзины
  // const deleteOrder = (id: number) => {
  //   setOrders(orders.filter(el => el.id !== id));
  // };

  // // Добавление товара в корзину
  // const addOrder = (item: Product) => {
  //   if (!orders.some(el => el.id === item.id)) {
  //     setOrders([...orders, item]);
  //   }
  // };

  // return (
  //   <div className="App">
  //     {/* <Registration/>
  //     <Header orders={orders} onDelete={deleteOrder} />
  //     <Main onChoose={chooseCategory} items={currentItems} onAdd={addOrder}/> */}
  //     <Registration/>
  //     <Router>
  //     <div className="App">
  //       <Header orders={orders} onDelete={deleteOrder} />
  //       <Routes>
  //         <Route path="/" element={<Main onChoose={chooseCategory} items={currentItems} onAdd={addOrder} />} />
  //         <Route path="/cart" element={<Cart orders={orders} onDelete={deleteOrder} />} />
  //       </Routes>
  //       <Footer />
  //     </div>
  //   </Router>
  //   </div>
  // );

  return (     
    <>    
    <Router>
      <div className="App">      
      <Header />               
        <Routes>
          {/* Главная страница с товарами */}
          {/* <Route 
            path="/Shop/" 
            element={
              <>
                <Header 
                // orders={orders} onDelete={deleteOrder} 
                />
                <Main />
                <Footer />
              </>
            } 
          /> */}

          {/* Страница корзины */}
          {/* <Route 
            path="/Shop/cart" 
            element={
              <>
                <Header 
                // orders={orders} onDelete={deleteOrder} 
                />
                <Cart 
                // orders={orders} onDelete={deleteOrder} 
                />
                <Footer />
              </>
            } 
          /> */}
          <Route path="/" element={<Navigate to="/products"/>}/>
          <Route path="/products"  element={<Main />}/>
          <Route path="/cart"  element={<Cart />}/>
          <Route path="/product/:id" element={<Product />}/>
        </Routes>
      <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
