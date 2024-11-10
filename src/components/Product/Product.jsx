import './Product.css'
import { Link } from 'react-router-dom'

export default function Product({ image, title, rating, price, handleAddToCart, handleViewItem }){
    return(
        <div className="productContainer">  
            <Link to='/ProductInfoPage'><img className="productImg" src={image} onClick={handleViewItem} /></Link>
            <h2 className="title" onClick={handleViewItem}>{title}</h2>
            <h3 className="rating">{rating.rate} Stars ({rating.count} Reviews)</h3>
            <h3 className="price">${price}</h3>
            <button onClick={handleAddToCart} className="addToCart">Add To Cart</button>
        </div>
    )
}
