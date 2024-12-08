import { CartItemsContext, OrderItemsContext } from '../App';
import { useContext, useState } from 'react';

function Cart() {
  const cartItemsC = useContext(CartItemsContext);
  const orderItemsC = useContext(OrderItemsContext);

  let totalItemsPrice =
    cartItemsC.cartItems.price.reduce(
      (acc, cur) => Number(acc) + Number(cur),
      0
    ) === 0
      ? 0
      : cartItemsC.cartItems.price.reduce(
          (acc, cur) => Number(acc) + Number(cur),
          0
        );

  function handleRemoveProduct() {
    cartItemsC.setCartItems({
      name: [],
      price: [],
      quantity: [],
    });
  }

  const [deliveryCost, setDeliveryCost] = useState('');
  const [deliveryKey, setDeliveryKey] = useState('');

  const handleDeliveryChange = (event) => {
    setDeliveryCost(event.target.value);
    setDeliveryKey(event.target.id);
    console.log(event.target.id);
  };

  let totalCartItemsPrice = (
    Number(totalItemsPrice) + Number(deliveryCost)
  ).toFixed(2);

  const handleOrder = (event) => {
    if (cartItemsC.cartItems.name.length > 0) {
      orderItemsC.setOrderItems({
        name: cartItemsC.cartItems.name,
        price: cartItemsC.cartItems.price,
        quantity: cartItemsC.cartItems.quantity,
        totalPrice: totalCartItemsPrice,
        deliveryTime: deliveryKey,
      });

      cartItemsC.setCartItems({
        name: [],
        price: [],
        quantity: [],
      });

      setDeliveryCost('0');
    } else {
      alert(`No Items inside Cart, go to the Menu`);
    }
  };

  return (
    <div className="w-fit text-center mr-auto ml-auto mb-[78px]">
      <h1 className="m-5 text-4xl">Cart page</h1>
      <div className="mb-5 cart-info-container pl-10 pr-10">
        <h2 className="m-3 text-2xl">Cart Info</h2>
        <div className="text-start p-3 cart-items-container">
          Cart Items
          <button
            className="pl-3 remove-cart-items"
            onClick={handleRemoveProduct}
          >
            Clear Cart
          </button>
          <p className="p-3">
            {cartItemsC.cartItems.name.map((product) => (
              <div>Product Name: {product}</div>
            ))}
          </p>
          <p className="p-3">
            {cartItemsC.cartItems.quantity.map((productQuantity) => (
              <div>Product Quantity: {productQuantity}</div>
            ))}
          </p>
          <p className="p-3">
            {cartItemsC.cartItems.price.map((productPrice) => (
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
              Quick Delivery +10$
            </label>
            <input
              className="input-delivery"
              name="delivery"
              value="10"
              required
              type="radio"
              id="10"
              onChange={handleDeliveryChange}
            />
            <label htmlFor="normal-delivery" className="p-2">
              Normal Delivery +5$
            </label>
            <input
              className="input-delivery"
              name="delivery"
              value="5"
              required
              type="radio"
              id="7"
              onChange={handleDeliveryChange}
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
              id="10"
              onChange={handleDeliveryChange}
            />
          </div>
        </div>
        <div className="text-center p-3 mt-5 mb-5 price-order-container">
          <p className="p-2">Total Price: {totalCartItemsPrice}$</p>
          <button className="p-2 order-button" onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
