import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Product from './components/Product/Product';
import useFetchProductRequest from './fetch/fetchProducts'
import ProductPage from './components/ProductPage'

const App =  () => {
  // 4 categories: 'products','electronics', "men's clothing", "women's clothing"
          //products is an assortment for homepage.

  const [category, updateCategory] = useState('products')
  const [currentTitle, updateCurrentTitle] = useState("Today's Trends")
  const { products, loading, error } = useFetchProductRequest(category);

  // console.log(currentTitle)
  
  const handleClickCategory = (e) => {
    updateCategory(e.target.id)
    if(e.target.id === 'products'){
      updateCurrentTitle("Today's Trends")
    }
    else{
      console.log(e.target.textContent)
      updateCurrentTitle(e.target.textContent)
    }
  }
  const handleAddToCart = (e) =>{
    console.log('added to cart')
  }
  return (
    <div>
      <div className="header">
          <h1 className='siteName' id='products' onClick={handleClickCategory}>Sure Shop</h1>
          <h2 className='electronics' id='electronics' onClick={handleClickCategory}>Electronics</h2>
          <h2 className='jewlery' id='jewelery' onClick={handleClickCategory}>Jewelry</h2>
          <h2 className='men' id="men's clothing" onClick={handleClickCategory}>Men's Clothing</h2>
          <h2 className='women' id="women's clothing" onClick={handleClickCategory}>Women's Clothing</h2>
          <h2 className='cart' id='cart'>🛒</h2>
      </div>

      <ProductPage
        title = {currentTitle} 
        products = {products}
        loading = {loading}
        error = {error}
        handleAddToCart={handleAddToCart}

      />

    
    </div>
  )
}

export default App;

