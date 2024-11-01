import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import useFetchProductRequest from './Data/fetchProducts'
import filterData from './Data/filterData'
import ProductPage from './components/ProductPage'
import CartCount from './components/CartCount';

const App = () => {
  const [category, updateCategory] = useState('products')
  const [currentTitle, updateCurrentTitle] = useState("Today's Trends")
  
  const { products, loading, error } = useFetchProductRequest()
  const [productData, updateProductData] = useState(filterData(category, products))

  const [cart, updateCart] = useState([])

  useEffect(() =>{
    updateProductData(filterData(category, products)) //renders after products returns defined
  },[products])
  
  const handleClickCategory = (e) => {
    updateCategory(e.target.id)
    if(e.target.id === 'products'){
      updateCurrentTitle("Today's Trends")
    }
    else{
      updateCurrentTitle(e.target.textContent)
    }
    updateProductData(filterData(e.target.id, products))
  }

  const handleAddToCart = (item) =>{
    updateCart([...cart, item])
    console.log(cart)
  }
  return (
    <>
      <div className="header">
          <h1 className='siteName' id='products' onClick={handleClickCategory}>Sure Shop</h1>
          <h2 className='electronics' id='electronics' onClick={handleClickCategory}>Electronics</h2>
          <h2 className='jewelry' id='jewelery' onClick={handleClickCategory}>Jewelry</h2>
          <h2 className='men' id="men's clothing" onClick={handleClickCategory}>Men's Clothing</h2>
          <h2 className='women' id="women's clothing" onClick={handleClickCategory}>Women's Clothing</h2>
          <div className='cartIconContainer'>
            <h2 className='cart' id='cart'>🛒</h2>
            <CartCount 
              count = {cart.length}
            />
          </div>
      </div>

      <ProductPage
        title = {currentTitle} 
        products = {productData}
        loading = {loading}
        error = {error}
        handleAddToCart={handleAddToCart}

      />

    
    </>
  )
}

export default App;

