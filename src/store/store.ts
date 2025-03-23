import { create } from 'zustand';

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

interface StoreState {
  items: Product[];
  currentItems: Product[];
  orders: Product[];

  setItems: (items: Product[]) => void;
  setCurrentItems: (items: Product[]) => void;
  addOrder: (item: Product) => void;
  addProductToList: (item: Product) => void;
  deleteOrder: (id: string) => void;
  deleteItem:(id: string) => void;
  chooseCategory: (category: string) => void;
  toggleFavorite: (item: Product) => void;

}

const useStore = create<StoreState>((set) => ({
  items: [],
  currentItems: [],
  orders: [],
  // products:[],

  
  setItems: (items) => set({ items }), //все товары

  setCurrentItems: (currentItems) => set({ currentItems }),

  addOrder: (item) =>
    set((state) => {
      if (!state.orders.some((el) => el.id === item.id)) {
        return { orders: [...state.orders, item] };
      }
      return state;
    }),

    addProductToList:(item) => 
      set((state) => {
        if (!state.items.some((el) => el.id === item.id)){
          return {items: [item, ...state.items] };
        }
        return state;
      }),
    

  deleteOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((el) => el.id !== id),
    })),
  
  deleteItem:(id) =>
    set((state) => ({
      items: state.items.filter((el) => el.id !== id),
      currentItems: state.currentItems.filter((el) => el.id !== id),
    })),
  
  
  chooseCategory: (category) => //фильтрация товаров 
    set((state) => ({
      currentItems:
        category === 'all'
          ? state.items
          : state.items.filter((el) => el.category === category),
    })),

  toggleFavorite: (item) =>
    set((state) => {
      const isInOrders = state.orders.some((order) => order.id === item.id);
      if (isInOrders) {
        // Если товар уже в корзине, удаляем его
        return { orders: state.orders.filter((order) => order.id !== item.id) };
      } else {
        // Если товара нет в корзине, добавляем его
        return { orders: [...state.orders, item] };
      }
    }),


}));

export default useStore;