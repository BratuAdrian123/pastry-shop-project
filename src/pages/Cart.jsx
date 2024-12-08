import { CartItemsContext } from '../App';
import { useContext, useState } from 'react';

function Cart() {
  const cartItemsC = useContext(CartItemsContext);

  let totalItemsPrice = cartItemsC.price.reduce(
    (acc, cur) => Number(acc) + Number(cur),
    0
  );

  return (
    <div className="w-fit text-center mr-auto ml-auto mb-[78px]">
      <h1 className="m-5 text-4xl">Cart page</h1>
      <div className="mb-5 cart-info-container pl-10 pr-10">
        <h2 className="m-3 text-2xl">Cart Info</h2>
        <div className="text-start p-3 cart-items-container">
          Cart Items
          <p className="p-3">
            {cartItemsC.name.map((product) => (
              <div>
                Product Name: {product}
                <button className="pl-3">Remove</button>
              </div>
            ))}
          </p>
          <p className="p-3">
            {cartItemsC.quantity.map((productQuantity) => (
              <div>Product Quantity: {productQuantity}</div>
            ))}
          </p>
          <p className="p-3">
            {cartItemsC.price.map((productPrice) => (
              <div>Item price: {productPrice}$</div>
            ))}
          </p>
        </div>
        <div className="mb-3 cart-delivery-container">
          <div className="p-2">
            <strong>Delivery options:</strong>
          </div>
          <div className="flex items-center pr-2">
            <label htmlFor="quick-delivery" className="p-2">
              Quick Delivery +9.99$
            </label>
            <input
              className="input-delivery"
              name="delivery"
              value="9.99"
              required
              type="radio"
              id="quick-delivery"
            />
            <label htmlFor="normal-delivery" className="p-2">
              Normal Delivery +4.99
            </label>
            <input
              className="input-delivery"
              name="delivery"
              value="4.99"
              required
              type="radio"
              id="normal-delivery"
            />
            <label htmlFor="slow-delivery" className="p-2">
              Slow Delivery Free
            </label>
            <input
              className="input-delivery"
              name="delivery"
              value="0"
              required
              type="radio"
              id="slow-delivery"
            />
          </div>
        </div>
        <div className="text-center p-3 mt-5 mb-5 price-order-container">
          <p className="p-2">
            Total Price: {Number(totalItemsPrice).toFixed(2)}$
          </p>
          <button className="p-2 order-button">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
