import PropTypes from "prop-types";
const Cart = ({ addProducts, handleDelete}) => {
  return (
    <div>
      {addProducts.map((product, idx) => (
        <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-5 mt-5 border p-5 rounded-xl">
          <img className="lg:w-36 rounded-xl" src={product.image} alt="" />
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p>{product.price}</p>
          </div>
          <div className="flex items-center">
          <button onClick={() => handleDelete(product.id)} className="w-full text-lg font-bold py-2 bg-green-400 rounded-full">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
    addProducts: PropTypes.object,
    handleDelete: PropTypes.func
}

export default Cart;
