import { useEffect, useState } from 'react'
import './Style/App.css'
import { Link, Route, Routes } from 'react-router-dom'
import useFetchProductRequest from './Data/fetchProducts'
import filterData from './Data/filterData'

import ProductsPage from './components/ProductsPage'
import CartCount from './components/Cart/CartCount'
import Cart from './components/Cart/Cart'
import ProductInfoPage from './components/ProductInfoPage'


const App = () => {
  const [category, updateCategory] = useState('products') //Defaults to display all category items in API
  const [currentTitle, updateCurrentTitle] = useState("Today's Trends")
  
  const { products, loading, error } = useFetchProductRequest()
  const [allProducts, updateAllProducts] = useState(products)
  const [productData, updateProductData] = useState(filterData(category, products))
  const [cart, updateCart] = useState([])
  const [viewItem, updateViewItem] = useState({})


  useEffect(() =>{ //Updates intial data states after API fetch is complete
    updateAllProducts(products) 
    updateProductData(filterData(category, products)) 
  },[products])

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Adds smooth scrolling animation
    });
},[category, viewItem])
  
  const handleClickCategory = (e) => { 
    updateCategory(e.target.id)
    if(e.target.id === 'products'){ //All categories (Sure Shop Icon -> click)
      updateCurrentTitle("Today's Trends")
    }
    else{
      updateCurrentTitle(e.target.textContent)
    }
    updateProductData(filterData(e.target.id, allProducts))
  }

  const handleAddToCart = (item, quantity = 1) =>{ //updates cart state everywhere except for the cart page itself.
    let inCart = false

    let newCart = cart.map((product) => {
      if(item.id === product.id){
        inCart = true
        product.selected += quantity
      }
      return product
    })
    if(!inCart){
      newCart = [...newCart, {...item, selected: quantity}] 
    }
    updateCart(newCart)
  }

  const handleViewItem = (item) => { 
    //called when an item image or title is clicked. Updates the view item state before routing to "productInfoPage"
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
              cart = {cart}
            />
          </div>
          
      </div>
     
    <Routes>
      <Route
        path = '/'
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
            cart = {cart}
            updateCart = {updateCart} //Update Cart state for removed items and altered quantities
            handleViewItem={handleViewItem}
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
          handleAddToCart = {handleAddToCart}
          handleViewItem = {handleViewItem}
        />
      }
      >
      </Route>
    </Routes>
    
    </>
  )
}

export default App;

