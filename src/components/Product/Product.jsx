import './Product.css'

export default function Product({ image, title, rating, price, handleAddToCart, id, value }){
    return(
        <div className="productContainer" id={id} value={value}>  
            <img className="productImg" src={image}  />
            <h2 className="title">{title}</h2>
            <h3 className="rating">{rating.rate} Stars ({rating.count} Reviews)</h3>
            <h3 className="price">${price}</h3>
            <button onClick={handleAddToCart} className="addToCart" value={value}>Add To Cart</button>
        </div>
    )
}
