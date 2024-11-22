import './Product/productInfo.css'
import { useEffect, useState } from 'react'
import filterData from '../Data/filterData'
import Product from './Product/Product'

export default function ProductInfoPage({ item, products, handleAddToCart, handleViewItem }){
    const related = filterData(item.category, products, item.title).splice(0,4)
    //add in error handling Navigate back to home and alert that item wasn't found?
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
                <button className='addToCart' id='infoBtn' onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>

            <div className="relatedItems">
                <h2 className='relatedTitle'>Items You May Like</h2>
                <div className="itemsContainer">
                    {related.map(product =>(
                        <Product
                        image={product.image}
                        title={product.title}
                        rating={product.rating}  // Access `rate` directly if rating is an object
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

/* 

[{
category: "men's clothing"
description: 
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."

id: 2

image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"

price: 22.3

rating: {rate: 4.1, count: 259}

title: "Mens Casual Premium Slim Fit T-Shirts "

}, ...]
*/