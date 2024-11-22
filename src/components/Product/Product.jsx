import './Product.css'
import { Link } from 'react-router-dom'

export default function Product({ image, title, rate, count, price, handleAddToCart, handleViewItem }){
    return(
        <div className="productContainer">  
            <Link to='/ProductInfoPage'><img className="productImg" src={image} onClick={handleViewItem} /></Link>
            <Link to='/ProductInfoPage' className="title" onClick={handleViewItem}>{title}</Link>
            <h3 className="rating">{rate} Stars ({count} Reviews)</h3>
            <h3 className="price">${price}</h3>
            <button onClick={handleAddToCart} className="addToCart">Add To Cart</button>
        </div>
    )
}
