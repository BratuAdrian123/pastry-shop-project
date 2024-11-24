import { useState } from 'react';
import { useContext } from 'react';
import { ProdList } from '../App.jsx';

function SearchBar() {
  const listOfProducts = useContext(ProdList);
  const [inputSearch, setInputSearch] = useState('');

  let inputHandler = (e) => {
    setInputSearch(e.target.value);
  };

  const searchData = listOfProducts.map((item) => item.name);

  return (
    <div>
      <div className="flex justify-center p-5">
        <input
          type="text"
          onChange={inputHandler}
          placeholder="Search for a Product"
          className="menu-search-bar outline-none w-full max-w-[450px] min-w-[150px] rounded-md text-start placeholder-current text-2xl p-3 font-semibold"
        />
      </div>
      {/* <div className="menu-main-section flex flex-wrap mt-10  justify-evenly">
        <div
          className="menu-page-content-container w-[300px] mr-2 mb-10 p-5 rounded-xl flex-row text-center"
          key={cakes[0].id}
        >
          <img
            src={cakes[0].img}
            alt="cake image"
            className="menu-content-img w-[200px] m-auto h-[200px] rounded-full mb-4"
          />
          <h3 className="text-2xl font-semibold pb-2">{cakes[0].name}</h3>
          <div className="quantity-container flex justify-evenly h-[40px] ">
            <input
              type="number"
              placeholder="0"
              className="w-[50px] h-auto quantity-input outline-none text-2xl text-center [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button className="w-[50px] text-2xl h-auto quantity-button">
              +
            </button>
            <button className="w-[50px] text-2xl h-auto quantity-button">
              -
            </button>
          </div>
          <p>
            <strong>Price: {cakes[0].price}</strong>
          </p>
          <a href="">More Info</a>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div> */}

      <div className="menu-main-section-searched flex flex-wrap mt-10  justify-evenly">
        {inputSearch}
      </div>
    </div>
  );
}

export default SearchBar;
