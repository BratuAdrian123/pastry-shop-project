import Carousel from '../Components/Carousel.jsx';
import { cakes, pastryGoods, tarts, cookies } from './ProductList.jsx';

function Home() {
  return (
    <div className="home-content-page ">
      <div className="home-header flex justify-center items-center mb-8 ">
        <span>Pastry</span>
        <img
          src="pictures/home-page-logo.png"
          alt="logo"
          className="w-[200px]"
        />
        <span>Shop</span>
      </div>
      <div className="home-main">
        <hr className="w-3/4 m-auto" />
        <h1 className="text-center m-8 text-4xl">
          Try some of our most sold goods
        </h1>
        <div className="seller-content-container flex flex-wrap justify-around mb-10 mt-10">
          <div className="p-5 mb-3 flex-row text-center seller-container">
            <img
              src={cakes[0].img}
              alt="Cake"
              className="seller-img w-[200px] h-[200px]"
            />
            <div className="mt-3">{cakes[0].name}</div>
            <div className="mt-3">{cakes[0].price}</div>
          </div>
          <div className="p-5 mb-3 flex-row text-center seller-container">
            <img
              src={tarts[0].img}
              alt="Tart"
              className="seller-img w-[200px] h-[200px]"
            />
            <div className="mt-3">{tarts[0].name}</div>
            <div className="mt-3">{tarts[0].price}</div>
          </div>
          <div className="p-5 mb-3 flex-row text-center seller-container">
            <img
              src={pastryGoods[0].img}
              alt="Pastry Good"
              className="seller-img w-[200px] h-[200px]"
            />
            <div className="mt-3">{pastryGoods[0].name}</div>
            <div className="mt-3">{pastryGoods[0].price}</div>
          </div>
          <div className="p-5 mb-3 flex-row text-center seller-container">
            <img
              src={cookies[0].img}
              alt="Cookie"
              className="seller-img w-[200px] h-[200px]"
            />
            <div className="mt-3">{cookies[0].name}</div>
            <div className="mt-3">{cookies[0].price}</div>
          </div>
        </div>
        <div className="home-footer flex-row justify-center">
          <div className="home-footer-header text-center w-[400px] m-auto">
            <span className="p-2 ">
              Promos and Discounts <strong>%</strong>
            </span>
          </div>
          <div className="home-footer-main mt-[20px]">
            <Carousel></Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
