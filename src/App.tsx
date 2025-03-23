import React, {  useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import useStore from "./store/store"; 

import Header from './Components/Header/Header';

import Footer from './Components/Footer/Footer';
import Main from "./pages/main/Main";
import Cart from "./pages/Cart/Cart";
import Product_pg from "./pages/Product_pg/Product_pg";
import Create from "./pages/Create/Create";

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




interface ApiResponse {
  data: Product[];
}
const App: React.FC = () => {
  const { setItems, setCurrentItems } = useStore();

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
<<<<<<< HEAD
          <Route path="/Shop_alpha/" element={<Navigate to="/Shop_alpha/products"/>}/>
          <Route path="/Shop_alpha/products"  element={<Main />}/>
          <Route path="/Shop_alpha/cart"  element={<Cart />}/>
          <Route path="/Shop_alpha/create"  element={<Create />}/>
          <Route path="/Shop_alpha/product/:id" element={<Product_pg />}/>
=======
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
          <Route path="/Shop_alpha/" element={<Navigate to="/Shop_alpha/products"/>}/>
          <Route path="/Shop_alpha/products"  element={<Main />}/>
          <Route path="/Shop_alpha/cart"  element={<Cart />}/>
          <Route path="/Shop_alpha/product/:id" element={<Product />}/>
<<<<<<< HEAD
>>>>>>> dbac692 (add Shop_alpha/)
=======
>>>>>>> caa8f2b3e824dd257e83d76649ac2330f0fbf97b
        </Routes>
      <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
