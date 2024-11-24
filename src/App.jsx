import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';
import { productList } from './pages/ProductList';

export const ProdList = createContext();

function App() {
  const [prodList, setProdList] = useState(productList);

  return (
    <>
      <ProdList.Provider value={prodList}>
        <Navbar />

        <Outlet />

        <Footer />
      </ProdList.Provider>
    </>
  );
}

export default App;
