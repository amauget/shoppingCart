export default function OrderSummary({ cart }){
    /* 
        need data for 
            subtotal
            free shipping line
            tax

            Order Total:
    */
    let subtotal = 0
    cart.forEach(item => subtotal += item.price)

    const tax = parseFloat((subtotal * .08).toFixed(2))

    const orderTotal = parseFloat((subtotal + tax).toFixed(2))

   return(
    <div className="orderSummary">
        <h2 className="SummaryTitle">Order Summary</h2>
        <div className="values">
            <h3 className="subtotalTitle">Subtotal:</h3>
            <h3 className="subtotal">${subtotal}</h3>
            <h3 className="shippingTitle">Shipping:</h3>
            <h3 className="shipping">Free</h3>
            <h3 className="taxTitle">Tax:</h3>
            <h3 className="tax">${tax}</h3>
            <h2 className="orderTotalTitle">Order Total:</h2>
            <h2 className="orderTotal">${orderTotal}</h2>
        </div>
        
    
    </div>
   )
}
