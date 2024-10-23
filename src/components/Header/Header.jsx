import PropTypes from "prop-types";
const Header = ({ addProducts, price }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
        {/* logo */}
        <h1 className="text-gray-800 font-bold text-3xl">Shopping Cart</h1>
        {/* menu start */}
        <div className="hidden lg:block">
          <ul className="flex gap-6 text-gray-600 font-semibold text-base">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </div>
        {/* menu end */}
        <div className="flex gap-4 text-gray-600 font-semibold text-xl">
          <h2>Cart {addProducts.length}</h2>
          <h2>$ {price}</h2>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          {/* search */}
          <div className="flex justify-between items-center relative">
            <input
              className="py-4 px-10 bg-gray-100 rounded-full placeholder-gray-800 outline-none"
              type="text"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 -left-1 pl-4 flex items-center text-2xl">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          {/* search end */}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  addProducts: PropTypes.object,
  price: PropTypes.number,
};

export default Header;
