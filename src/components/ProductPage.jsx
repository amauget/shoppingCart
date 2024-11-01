import { useState, useEffect } from "react"
import Product from "./Product/Product"

export default function ProductPage({title, products = [], loading, error, handleAddToCart}){
    return (
        <div className="productPage">
            <h2 className="title">{title}</h2>

            <div className="productsContainer">
                {loading && <p>Loading...</p>}
                {products.length > 0 ? (
                    products.map((item) => (
                        <Product
                            image={item.image}
                            title={item.title}
                            rating={item.rating.rate}  // Access `rate` directly if rating is an object
                            price={item.price}
                            handleAddToCart={handleAddToCart}
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