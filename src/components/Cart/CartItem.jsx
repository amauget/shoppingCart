import { Link } from "react-router-dom"
export default function CartItem({ image, title, rating, price, removeFromCart, handleViewItem, quantity }){
    console.log(quantity)
    return(
        <div className="cartItem">
            <h3 className='cartName'>{title}</h3>
            <Link to='/ProductInfoPage'><img className="cartImg" src={image} onClick={handleViewItem} /></Link>
            {/* <h3 className="cartRating">{rating.rate} Stars ({rating.count} Reviews)</h3> */}
            <h3 className="cartPrice">${price}</h3>
            <input type="number" min={1} max={5} defaultValue={quantity} />
            <button className="removeItem" onClick={removeFromCart}>Remove Item</button>
        </div>
    )

}
// <Link to='/ProductInfoPage'><img className="productImg" src={image} onClick={handleViewItem} /></Link>
