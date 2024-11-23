import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import './Cart.css'

export default function Cart({ cart, updateCart, handleViewItem }){
    const removeFromCart = (removed) => {
        const newCart = cart.filter(item => item.title !== removed.title)
        updateCart([...newCart])
    }
    
    return(
        //implement a UI "Continue Shopping" button

        <div className="cartPageContainer">
            <div className="cartProducts">
                <h1 className="cartTitle">Your Shopping Cart</h1>
                { cart.length > 0 ?
                cart.map((item) => (
                    <CartItem
                        image={item.image}
                        title={item.title}
                        rating={item.rating}  // Access `rate` directly if rating is an object
                        price={item.price}
                        key={item.id}
                        removeFromCart={() => removeFromCart(item)} 
                        handleViewItem = {() => handleViewItem(item)}
                        quantity = {item.selected}
                   ></CartItem>
                    
                ))
                : <h3>No Items</h3>
                }
            </div>
            <OrderSummary
                cart = {cart}
            ></OrderSummary>



        </div>
    )
}
