import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Проверка на наличие корневого элемента
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Не удалось найти элемент с id "root"');
}

// Создание корневого элемента и рендеринг приложения
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);