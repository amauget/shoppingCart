import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import '../../Style/Cart.css'

export default function Cart({ cart, updateCart, handleViewItem }){
    const removeFromCart = (removed) => {
        const newCart = cart.filter(item => item.title !== removed.title)
        updateCart([...newCart])
    }

    const changeCartQuantity = (value) => {
        const newCart = cart.filter(item => item.selected = value )
        updateCart([...newCart])
    }
   
    return(
        <div className="cartPageContainer">
            <div className="cartProducts">
                <h1 className="cartTitle">Your Shopping Cart</h1>
                { cart.length > 0 ?
                cart.map((item) => (
                    <CartItem
                        item={item}
                        removeFromCart={() => removeFromCart(item)} 
                        changeCartQuantity = {changeCartQuantity}
                        handleViewItem={() => handleViewItem(item)} //Updates single item page with selected data
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
