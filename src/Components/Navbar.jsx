import { Link } from 'react-router-dom';
import { navbarList } from '../pages/NavbarList';
import { CartItemsContext } from '../App';
import { useContext, useEffect, useState } from 'react';

function Navbar() {
  const cartItemsC2 = useContext(CartItemsContext);

  const [totalItemsQuantity, setTotalItemsQuantity] = useState(0);
  useEffect(() => {
    setTotalItemsQuantity(
      cartItemsC2.cartItems.quantity.reduce(
        (acc, cur) => Number(acc) + Number(cur),
        0
      ) === 0
        ? 0
        : cartItemsC2.cartItems.quantity.reduce(
            (acc, cur) => Number(acc) + Number(cur),
            0
          )
    );
  }, [cartItemsC2.cartItems.quantity]);

  return (
    <div
      className=" navbar  flex w-full justify-between items-center "
      id="navbar"
    >
      <div className="flex justify-center w-[150px] items-center text-lg font-bold  ">
        <img
          src="/pictures/logo.png"
          alt="logo"
          className="w-[60px]"
          title="Logo"
        />
        <h2 className="navbar-text">Pastry Shop</h2>
      </div>
      <ul className="flex w-[800px] h-[auto] justify-around items-center">
        {navbarList.map((navItem, i) => (
          <li className="navbar-li hover:p-2 rounded-md" key={i}>
            <Link
              to={navItem.url}
              className="flex flex-column items-center text-lg font-bold"
            >
              <img
                src={navItem.img}
                alt={navItem.name}
                className="w-[30px]"
                title={navItem.name}
              />
              <span className="navbar-text">{navItem.name}</span>
            </Link>
          </li>
        ))}

        <div
          className={`relative cart-quantity ${
            totalItemsQuantity === 0 ? 'hide' : ''
          }`}
        >
          {totalItemsQuantity}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
