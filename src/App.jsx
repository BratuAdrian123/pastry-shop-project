import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';
import { productList } from './pages/ProductList';

export const ProdList = createContext();
export const CartItemsContext = createContext();
export const OrderItemsContext = createContext();

function App() {
  const [prodList, setProdList] = useState(productList);

  const [cartItems, setCartItems] = useState({
    name: [],
    price: [],
    quantity: [],
  });

  const [orderItems, setOrderItems] = useState([
    { name: [], price: [], quantity: [], totalPrice: '', deliveryTime: '' },
  ]);

  return (
    <>
      <ProdList.Provider value={prodList}>
        <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
          <OrderItemsContext.Provider value={{ orderItems, setOrderItems }}>
            <Navbar />

            <Outlet />

            <Footer />
          </OrderItemsContext.Provider>
        </CartItemsContext.Provider>
      </ProdList.Provider>
    </>
  );
}

export default App;
