import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";

const AllProducts = ({handleAddProduct}) => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);
    return (
        <div className="col-span-2 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                {
                    products.map((product, idx) => <Product 
                    key={idx} 
                    product={product}
                    handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
        </div>
    );
};

AllProducts.propTypes = {
    handleAddProduct: PropTypes.func
}

export default AllProducts;