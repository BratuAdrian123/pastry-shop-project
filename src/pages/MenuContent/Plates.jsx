import { useContext } from 'react';
import { ProdList } from '../../App';
import { Link } from 'react-router-dom';

function Plates() {
  const listOfProducts = useContext(ProdList);
  return (
    <div>
      <div className="flex-row">
        <h2 className="text-center text-4xl p-3" id="plates">
          Mini Sweet Plates
        </h2>
        <div className="flex justify-evenly">
          <a href="#tarts">
            <button className="w-[150px] section-button p-2 text-2xl">
              <div className="flex justify-evenly">
                <img
                  src="pictures/up-arrow.png"
                  alt="up arrow"
                  className="w-[30px]"
                />
                Tarts
              </div>
            </button>
          </a>
          <a href="#navbar">
            <button className="w-[150px] section-button p-2 text-2xl">
              Menu
            </button>
          </a>
        </div>
      </div>
      <div className="menu-main-section flex flex-wrap mt-10 justify-evenly ">
        {listOfProducts
          .filter((product) => product.type === 'plate')
          .map((product) => (
            <div
              className="menu-page-content-container w-[300px] mr-2 mb-10 p-5 rounded-xl flex-row text-center"
              key={product.id}
            >
              <img
                src={product.img}
                alt="cake image"
                className="menu-content-img w-[200px] m-auto h-[200px] rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold pb-2">{product.name}</h3>

              <p className="p-2 mb-3">
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

export default Plates;
