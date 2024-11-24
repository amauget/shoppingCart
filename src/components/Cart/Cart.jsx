import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useState } from "react";
import './Cart.css'

export default function Cart({ cart, updateCart, handleViewItem, handleAddToCart }){
    const [quantity, updateQuantity] = useState(1)
    
    const handleQuantity = (value) => {
        updateQuantity(value)
        
    } 

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
                        item={item}
                        handleQuantity={handleQuantity}
                        removeFromCart={() => removeFromCart(item)} 
                        handleAddToCart = {handleAddToCart}
                        key={item.id}
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
