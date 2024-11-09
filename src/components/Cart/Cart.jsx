import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import './Cart.css'

export default function Cart({ cart, updateCart }){
    const removeFromCart = (removed) => {
        const newCart = cart.filter(item => item.title !== removed.title)
        updateCart([...newCart])
    }
    return(
        //implement a UI "Continue Shopping" button

        <div className="cartPageContainer">
            <h1 className="cartTitle">Your Shopping Cart:</h1>
            <div className="cartProducts">
                { cart.length > 0 ?
                cart.map((item) => (
                    <CartItem
                        image={item.image}
                        title={item.title}
                        rating={item.rating}  // Access `rate` directly if rating is an object
                        price={item.price}
                        key={item.id}
                        removeFromCart={() => removeFromCart(item)} 
                   ></CartItem>
                    
                ))
            : <h3>No Items in Cart</h3>
            }
            </div>
            <OrderSummary
                cart = {cart}
            ></OrderSummary>



        </div>
    )
}
/* 

[{
category: "men's clothing"
description: 
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."

id: 2

image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"

price: 22.3

rating: {rate: 4.1, count: 259}

title: "Mens Casual Premium Slim Fit T-Shirts "

}, ...]
*/