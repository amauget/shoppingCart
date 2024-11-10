import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import useFetchProductRequest from './Data/fetchProducts'
import filterData from './Data/filterData'

import ProductsPage from './components/ProductsPage'
import CartCount from './components/CartCount';
import Cart from './components/Cart/Cart'
import ProductInfoPage from './components/ProductInfoPage'

const App = () => {
  const [category, updateCategory] = useState('products') //Defaults to display all category items in API
  const [currentTitle, updateCurrentTitle] = useState("Today's Trends")
  
  const { products, loading, error } = useFetchProductRequest()
  const [productData, updateProductData] = useState(filterData(category, products))

  const [cart, updateCart] = useState([])

  const [viewItem, updateViewItem] = useState({})

  // ADD LOGIC FOR COUNTING ADDED OBJECT INSTEAD OF DUPLICATING IN CART

  //cart component to be child of App, overlaying current product page in popup format
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
  }

  const handleViewItem = (item) => {
    updateViewItem(item)
  }

  return (
    <>
      <div className="header">
          <Link className='siteName' to='/'><img className='siteLogo' src="/logo.png" alt="Sure Shop" id='products' onClick={handleClickCategory}></img> </Link>
          <Link className='electronics' id='electronics' onClick={handleClickCategory} to='/'>Electronics</Link>
          <Link className='jewelry' id='jewelery' onClick={handleClickCategory} to='/'>Jewelry</Link>
          <Link className='men' id="men's clothing" onClick={handleClickCategory}to='/'>Men's Clothing</Link>
          <Link className='women' id="women's clothing" onClick={handleClickCategory} to='/'>Women's Clothing</Link>
          
          <div className='cartIconContainer'>
          <Link className='cart' id='cart' to='/Cart'>🛒</Link>
            <CartCount 
              count = {cart.length}
            />
          </div>
          
      </div>
     
    <Routes>
      <Route
        path = '/' //called a wildcard. Prevents de-coupling of parent when using nested paths
        element = {
          <ProductsPage
            title = {currentTitle}
            products = {productData}
            loading = {loading}
            error = {error}
            handleAddToCart={handleAddToCart}
            handleViewItem ={handleViewItem}
          ></ProductsPage>
        }
      >
      </Route>

      <Route
        path='/Cart'
        element = {
          <Cart 
            //Insert Props here
            cart = {cart}
            updateCart = {updateCart} //Update Cart state for removed items

          >
          </Cart>
        }
      >  
      </Route>

      <Route
      path='/ProductInfoPage'
      element = { 
        <ProductInfoPage 
          item = {viewItem}
          products = {products}
        />
       
      }
      >
      </Route>
    </Routes>
    
    </>
  )
}

export default App;

