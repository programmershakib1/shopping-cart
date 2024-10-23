import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'
import Header from './components/Header/Header'

function App() {
  const [isActive, setIsActive] = useState({cart: true, status: 'cart'});

  const [addProducts, setAddProducts] = useState([]);

  const [price, setPrice] = useState(0);

  const handleIsActive = (status) => {
    if(status === 'cart'){
      setIsActive({
        cart: true,
        status: 'cart'
      });
    }
    else{
      setIsActive({
        cart: false,
        status: 'about'
      })
    }
  }

  const handleAddProduct = (product) => {
    const isExist = addProducts.find((p) => p.id == product.id);
    if(isExist){
      alert('Product is already Added')
    }
    else{
      handleIncreasePrice(product.price);
      const newProducts = [...addProducts, product];
      setAddProducts(newProducts);
    }
  }

  const handleDelete = (id) => {
    handleDeletePrice(id);
    const remainingProduct = addProducts.filter((p) => p.id != id);
    setAddProducts(remainingProduct);
  }

  const handleIncreasePrice = (p) => {
    setPrice(price + p);
  }

  const handleDeletePrice = (id) => {
    const product = addProducts.find((p) => p.id == id);
    setPrice(price - product.price);
  }

  return (
    <div className='container mx-auto px-3 lg:px-0'>
      <Header addProducts={addProducts} price={price}></Header>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-20 gap-5'>
        <AllProducts handleAddProduct={handleAddProduct}></AllProducts>
        <CartContainer 
          handleIsActive={handleIsActive}
          isActive={isActive}
          addProducts={addProducts}
          handleDelete={handleDelete}
        ></CartContainer>
      </div>
    </div>
  )
}

export default App
