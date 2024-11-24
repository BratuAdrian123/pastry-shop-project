import Cakes from './MenuContent/Cakes.jsx';
import Cookies from './MenuContent/Cookies.jsx';
import Macarons from './MenuContent/Macarons.jsx';
import Eclairs from './MenuContent/Eclairs.jsx';
import PastryGoods from './MenuContent/PastryGoods.jsx';
import Tarts from './MenuContent/Tarts.jsx';
import Plates from './MenuContent/Plates.jsx';
import SearchBar from '../Components/SearchBar.jsx';

function Menu() {
  return (
    <div className="menu-content-page">
      <div className="menu-heading">
        <ul className="flex justify-evenly items-center text-2xl menu-navbar text-center hover:p-2">
          <li className="p-2">
            <a href="#cakes">Cakes</a>
          </li>
          <li className="p-2">
            <a href="#cookies">Cookies</a>
          </li>
          <li className="p-2">
            <a href="#macarons">Macarons</a>
          </li>
          <li className="p-2">
            <a href="#eclairs">Eclairs</a>
          </li>
          <li className="p-2">
            <a href="#pastryGoods">Pastry Goods</a>
          </li>
          <li className="p-2">
            <a href="#tarts">Tarts</a>
          </li>
          <li className="p-2">
            <a href="#plates">Mini Sweets Plates</a>
          </li>
        </ul>
        {/* <div className="flex justify-center p-5">
          <input
            type="text"
            placeholder="Search for a Product"
            className="menu-search-bar outline-none w-full max-w-[450px] min-w-[150px] rounded-md text-start placeholder-current text-2xl p-3 font-semibold"
          />
        </div>
        <div>Found searched item</div> */}
        <SearchBar></SearchBar>
        <h1 className="text-center text-4xl p-3">Explore the Menu</h1>
      </div>

      {/* Cakes */}
      <hr className="w-3/4 m-auto" />
      <Cakes></Cakes>

      {/* Cookies */}
      <hr className="w-[600px] m-auto" />
      <Cookies></Cookies>

      {/* Macarons */}
      <hr className="w-[600px] m-auto" />
      <Macarons></Macarons>

      {/* Eclairs */}
      <hr className="w-[600px] m-auto" />
      <Eclairs></Eclairs>

      {/* Pastry Goods */}
      <hr className="w-[600px] m-auto" />
      <PastryGoods></PastryGoods>

      {/* Tarts */}
      <hr className="w-[600px] m-auto" />
      <Tarts></Tarts>

      {/* Sweet plates */}
      <hr className="w-[600px] m-auto" />
      <Plates></Plates>
    </div>
  );
}

export default Menu;
