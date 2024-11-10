import { useState, useEffect } from "react"
import Product from "./Product/Product"

export default function ProductsPage({title, products = [], category, loading, error, handleAddToCart, handleViewItem}){
    
    return (
        <div className="productPage">
            <h2 className="productTitle">{title}</h2>

            <div className="productsContainer">
                {loading && <p>Loading...</p>}
                {products.length > 0 ? (
                    products.map((item) => (
                        
                        <Product
                            image={item.image}
                            title={item.title}
                            rating={item.rating}  // Access `rate` directly if rating is an object
                            price={item.price}
                            handleAddToCart={() => handleAddToCart(item)}  // Pass entire data segment when clicked
                            handleViewItem={() => handleViewItem(item)} //Updates single item page with selected data
                            key={item.id}
                        />
                ))
                ) : (
                    !loading && <p>No products found.</p>
                )}
            </div>
           
        </div>
    )
}