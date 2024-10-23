import About from "../About/About";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";

const CartContainer = ({handleIsActive, isActive, addProducts, handleDelete}) => {
    return (
        <div className="col-span-1 mb-10">
            <div className="grid grid-cols-2 gap-5">
                <button onClick={() => handleIsActive('cart')} 
                className={isActive.cart?"text-xl font-bold bg-green-400 lg:px-16 py-2 rounded-full":"text-xl font-bold border-2 lg:px-16 py-2 rounded-full"}>CART</button>
                <button onClick={() => handleIsActive('about')} className={isActive.cart?"text-xl font-bold border-2 lg:px-16 py-2 rounded-full":"text-xl font-bold bg-green-400 lg:px-16 py-2 rounded-full"}>ABOUT</button>
            </div>
                {
                    isActive.cart?<Cart addProducts={addProducts} handleDelete={handleDelete}></Cart>:<About></About>
                }
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActive: PropTypes.func,
    isActive: PropTypes.object,
    addProducts: PropTypes.object,
    handleDelete: PropTypes.func
}

export default CartContainer;