import { useState } from 'react';
import { useContext } from 'react';
import { ProdList } from '../App.jsx';
import { Link } from 'react-router-dom';

function SearchBar() {
  const listOfProducts = useContext(ProdList);
  let [searchQuery, setSearchQuery] = useState('');
  let [hideClass, sethideClass] = useState(true);

  const filteredProducts = listOfProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const showSearchItems = () => {
    document
      .querySelector('.menu-main-section-searched')
      .classList.remove('hide');
  };
  const hideSearchItems = () => {
    document.querySelector('.menu-main-section-searched').classList.add('hide');
  };

  return (
    <div>
      <div className="flex justify-center p-5">
        <input
          type="text"
          value={searchQuery}
          onChange={inputHandler}
          placeholder="Search for a Product"
          className="menu-search-bar outline-none w-full max-w-[450px] min-w-[150px] rounded-md text-start placeholder-current text-2xl p-3 font-semibold"
        />
      </div>
      <div className="flex justify-around">
        <button
          className="text-center w-[200px] section-button p-2 text-2xl"
          onClick={showSearchItems}
        >
          Show Results
        </button>
        <button
          className="text-center w-[200px] section-button p-2 text-2xl"
          onClick={hideSearchItems}
        >
          Hide Results
        </button>
      </div>

      <div className="hide menu-main-section-searched flex flex-wrap mt-10  justify-evenly">
        {filteredProducts.map((product) => (
          <div
            className="menu-page-content-container w-[300px] mr-2 mb-10 p-5 rounded-xl flex-row text-center"
            key={product.id}
          >
            <img
              src={product.img}
              alt="cake image"
              className="menu-content-img w-[200px] m-auto h-[200px] rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold ">{product.name}</h3>
            <p className="pb-2 mb-3">
              <strong>Price: {product.price}</strong>
            </p>
            <Link to={'/menu/' + product.id} className="more-info-link">
              More Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
