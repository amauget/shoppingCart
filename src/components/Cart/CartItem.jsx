import { Link } from "react-router-dom"
import CartQuantity from "../CartQuantity"
export default function CartItem({ item, changeCartQuantity, removeFromCart, handleViewItem }){
    return(
        <div className="cartItem">
            <Link to='/ProductInfoPage' className={'cartName'} onClick={handleViewItem}>{item.title}</Link> 
            <Link to='/ProductInfoPage'><img className="cartImg" src={item.image} onClick={handleViewItem} /></Link>
            <h3 className="cartPrice">${item.price * item.selected}</h3>
            <CartQuantity
                    item = { item }
                    quantity={ item.selected }
                    changeCartQuantity={ changeCartQuantity }
            />            
            <button className="removeItem" onClick={removeFromCart}>Remove Item</button>
        </div>
    )

}
