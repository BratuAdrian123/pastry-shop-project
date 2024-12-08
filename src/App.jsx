import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';
import { productList } from './pages/ProductList';

export const ProdList = createContext();
export const CartItemsContext = createContext();

function App() {
  const [prodList, setProdList] = useState(productList);

  const [cartItems, setCartItems] = useState({
    name: [],
    price: [],
    quantity: [],
  });

  function handleRemoveProduct(product) {
    if (cartItems.name.length === 0) {
      <div>
        <p>Item Name: </p>
        <p>Item Quantity: </p>
        <p>Item Price: </p>
      </div>;
    } else {
      cartItems.name.pop();
      cartItems.quantity.pop();
      cartItems.price.pop();
    }
  }

  // let cartItems = {
  //   name: [],
  //   price: [],
  //   quantity: [],
  // };

  // let totalItemsPrice = cartItems.price.reduce(
  //   (acc, cur) => (Number(acc) + Number(cur)).toFixed(2),
  //   0
  // );

  return (
    <>
      <ProdList.Provider value={prodList}>
        <CartItemsContext.Provider value={cartItems}>
          <Navbar />

          <Outlet />

          <Footer />
        </CartItemsContext.Provider>
      </ProdList.Provider>
    </>
  );
}

export default App;
