import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import Cart from './pages/Cart.jsx';
import ContactAndAbout from './pages/ContactAndAbout.jsx';
import Menu from './pages/Menu.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/account" element={<Account></Account>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route
        path="/about"
        element={<ContactAndAbout></ContactAndAbout>}
      ></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
      <Route path="/menu/:id" element={<ProductPage></ProductPage>}></Route>

      <Route path="/login" element={<Login></Login>}></Route>

      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
