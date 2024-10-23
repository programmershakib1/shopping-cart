import PropTypes from "prop-types";
const Product = ({product, handleAddProduct}) => {
    const {name, image, price, description, isFeature} = product;
    return (
        <div>
            <div className="border p-5 rounded-xl h-full">
                <img className="rounded-xl" src={image} alt="" />
                <h2 className="pt-10 pb-5 text-2xl font-bold">{name}</h2>
                <p className="py-5">{description}</p>
                <p className="font-medium py-4">{isFeature?"Feature category":"Not category"}</p>
                <p className="text-xl font-semibold pb-5">${price}</p>
                <div className="">
                    <button onClick={() => handleAddProduct(product)} className="w-full text-xl font-bold border py-2 rounded-full">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
    handleAddProduct: PropTypes.func
}

export default Product;