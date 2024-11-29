import '../Style/productInfo.css'
import { useState } from 'react'
import filterData from '../Data/filterData'
import Product from './Product/Product'
import Quantity from './Quantity'

export default function ProductInfoPage({ item, products, handleAddToCart, handleViewItem }){
    //limits related to 4 items max for presentability
    const related = filterData(item.category, products, item.title).splice(0,4)
    
    const [quantity, updateQuantity] = useState(1)
    const [current, updateCurrent] = useState(0)

    if(item.id !== current){
        updateCurrent(item.id) //Detects when a new item is selected to reset quantity to 1
        updateQuantity(1)
    }

    const handleQuantity = (value) => {
        updateQuantity(value)
    } 

    return(
        <div className="productInfoPage">
            <div className='imgContainer'>
                <img className='infoImg' src={item.image} alt="" />
            </div>

            <div className="textContainer">
                <h1 className="infoTitle">{item.title}</h1>
                
                <div className='priceRatingContainer'>
                    <h3 className="infoPrice">${item.price}</h3>
                    <h3 className='infoRating'>{item.rating.rate}/5 ({item.rating.count} Reviews)</h3>
                </div>

                <p className='description'>{item.description}</p>
                
                <div className="quantityContainer">
                    <label className='quantityLabel' htmlFor="quantity">Quantity:</label>
                    <Quantity
                        quantity={quantity}
                        handleQuantity={handleQuantity}
                    />
                </div>
                
                <button className='addToCart' id='infoBtn' onClick={() => handleAddToCart(item, quantity)}>Add to Cart</button>
            </div>

            <div className="relatedItems">
                <h2 className='relatedTitle'>Items You May Like</h2>
                
                <div className="itemsContainer">
                    {related.map(product =>(
                        <Product
                        image={product.image}
                        title={product.title}
                        rate={product.rating.rate}
                        count = {product.rating.count}
                        price={product.price}
                        handleAddToCart={() => handleAddToCart(product)}  // Pass entire data segment when clicked
                        handleViewItem={() => handleViewItem(product)} //Updates single item page with selected data
                        key={`related${product.id}`}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}