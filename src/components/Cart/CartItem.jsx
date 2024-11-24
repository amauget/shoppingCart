import { Link } from "react-router-dom"
import CartQuantity from "../CartQuantity"
export default function CartItem({ item, handleAddToCart, removeFromCart, handleViewItem }){
    return(
        <div className="cartItem">
            <h3 className='cartName'>{item.title}</h3>
            <Link to='/ProductInfoPage'><img className="cartImg" src={item.image} onClick={handleViewItem} /></Link>
            {/* <h3 className="cartRating">{rating.rate} Stars ({rating.count} Reviews)</h3> */}
            <h3 className="cartPrice">${item.price * item.selected}</h3>
            <CartQuantity
                    item = {item}
                    quantity={item.selected}
                    handleAddToCart={handleAddToCart}
            />            
            <button className="removeItem" onClick={removeFromCart}>Remove Item</button>
        </div>
    )

}
// <Link to='/ProductInfoPage'><img className="productImg" src={image} onClick={handleViewItem} /></Link>
