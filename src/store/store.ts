import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  image_path: string;
  desc: string;
  wood_type: string;
  category: string;
  price: string;
  finish: string;
}

interface StoreState {
  items: Product[];
  currentItems: Product[];
  orders: Product[];
  setItems: (items: Product[]) => void;
  setCurrentItems: (items: Product[]) => void;
  addOrder: (item: Product) => void;
  deleteOrder: (id: number) => void;
  deleteItem:(id: number) => void;
  chooseCategory: (category: string) => void;
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
}));

export default useStore;