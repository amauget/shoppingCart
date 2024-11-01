import './Product.css'

export default function Product({ image, title, rating, price, handleAddToCart, key }){
    return(
        <div className="productContainer" id={key}>  
            <img className="productImg" src={image}  />
            <h2 className="title">{title}</h2>
            <h3 className="rating">{rating} Stars</h3>
            <h3 className="price">${price}</h3>
            <button /* onClick={handleAddToCart}  */className="addToCart">Add To Cart</button>
        </div>
    )
}
/* 
category: "electronics"
description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
id: 9
image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
price: 64
rating: {rate: 3.3, count: 203}
title: "WD 2TB Elements Portable External Hard Driv
*/