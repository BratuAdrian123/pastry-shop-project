import React, { useState } from 'react';
import './Carousel.css';

function Carousel() {
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  if (index === 0) {
    return (
      <div className="carousel bg-car-bg-0">
        <div className="slider-container flex justify-center ml-auto mr-auto mt-[6%] ">
          <div>
            <h1 className="pt-10">First Order</h1>
            <hr className="w-1/4 m-auto" />
            <p className="pb-[70px] pt-5">
              Free Shipping and 10% Discount on the first order
            </p>
            <div className="menu-link ml-auto mr-auto ">
              <a href="/menu">Check out the Menu </a>
            </div>
          </div>
        </div>
        <div className="button-container flex justify-around ">
          <button onClick={handlePrevious} className="back-button">
            Previous
          </button>

          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      </div>
    );
  } else if (index === 1) {
    return (
      <div className="carousel bg-cover bg-car-bg-1">
        <div className="slider-container flex justify-center ml-auto mr-auto mt-[6%] ">
          <div>
            <h1 className="pt-10">20% off for any Pastry Goods</h1>
            <hr className="w-3/4 m-auto" />
            <p className="pb-[70px] pt-5">
              20% off to any order of Pastry Goods over 30$
            </p>
            <div className="menu-link ml-auto mr-auto ">
              <a href="/menu">Find them in the Menu</a>
            </div>
          </div>
        </div>
        <div className="button-container flex justify-around ">
          <button onClick={handlePrevious} className="back-button">
            Previous
          </button>

          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      </div>
    );
  } else if (index === 2) {
    return (
      <div className="carousel bg-car-bg-2">
        <div className="slider-container flex justify-center ml-auto mr-auto mt-[6%] ">
          <div>
            <h2 className="pt-5">Tart Monday</h2>
            <hr className="w-2/4 m-auto" />
            <p className="pb-[10px] pt-5">
              15% off on any order of Tarts over 20$
            </p>

            <h2 className="pt-5">Sweet Friday Plates</h2>
            <hr className="w-2/4 m-auto" />
            <p className="pb-[30px]  pt-5">
              15% off on any order of Sweet Plates over 50$
            </p>
            <div className="menu-link ml-auto mr-auto ">
              <a href="/menu">Check out the Menu </a>
            </div>
          </div>
        </div>
        <div className="button-container flex justify-around ">
          <button onClick={handlePrevious} className="back-button">
            Previous
          </button>

          <button onClick={handleNext} className="next-button">
            Next
          </button>
        </div>
      </div>
    );
  }

  return <></>;
}

export default Carousel;
