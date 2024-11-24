import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div
      className=" navbar  flex w-full justify-between items-center "
      id="navbar"
    >
      <div className="flex justify-center w-[150px] items-center text-lg font-bold  ">
        <img
          src="pictures/logo.png"
          alt="logo"
          className="w-[60px]"
          title="Logo"
        />
        <h2 className="navbar-text">Pastry Shop</h2>
      </div>
      <ul className="flex w-[800px] h-[auto] justify-around items-center">
        <li className="navbar-li hover:p-2 rounded-md">
          <Link
            to="/"
            className="flex flex-column items-center text-lg font-bold"
          >
            <img
              src="pictures/home-icon.png"
              alt="home-icon"
              className="w-[30px]"
              title="Home Page"
            />
            <span className="navbar-text">Home</span>
          </Link>
        </li>
        <li className="navbar-li hover:p-2 rounded-md">
          <Link to="/about" className="flex items-center text-lg font-bold">
            <img
              src="pictures/about-icon.png"
              alt="about-icon"
              className="w-[30px]"
              title="Contact & About"
            />
            <span className="navbar-text">Contact & About</span>
          </Link>
        </li>
        <li className="navbar-li hover:p-2 rounded-md">
          <Link to="/menu" className="flex items-center text-lg font-bold">
            <img
              src="pictures/menu.png"
              alt="menu-icon"
              className="w-[30px]"
              title="Menu"
            />
            <span className="navbar-text">Menu</span>
          </Link>
        </li>
        <li className="navbar-li hover:p-2 rounded-md">
          <div className="relative">
            <Link to="/cart" className="flex items-center text-lg font-bold">
              <img
                src="pictures/cart.png"
                alt="cart-icon"
                className="w-[30px]"
                title="Cart"
              />
              <span
                className="absolute bottom-[11px]
              left-[8px] cart-quantity text-center "
              >
                0
              </span>
              <span className="navbar-text">Cart</span>
            </Link>
          </div>
        </li>
        <li className="navbar-li hover:p-2 rounded-md">
          <Link to="/login" className="flex items-center text-lg font-bold">
            <img
              src="pictures/login.png"
              alt="login-icon"
              className="w-[30px]"
              title="Login"
            />
            <span className="navbar-text">Login</span>
          </Link>
        </li>
        <li className="navbar-li hover:p-2 rounded-md">
          <Link to="/account" className="flex items-center text-lg font-bold">
            <img
              src="pictures/account.png"
              alt="account-icon"
              className="w-[30px]"
              title="Account"
            />
            <span className="navbar-text">Account</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
