export default function OrderSummary({ cart }){
    /* 
        need data for 
            subtotal
            free shipping line
            tax

            Order Total:
    */
    let subtotal = 0
    cart.forEach(item => subtotal += (item.price * item.selected))

    const tax = parseFloat((subtotal * .08).toFixed(2)) 

    const orderTotal = parseFloat((subtotal + tax).toFixed(2))

   return(
    <div className="orderSummary">
        <h2 className="summaryTitle">Order Summary</h2>
        <div className="values">
            <h3 className="subtotalTitle">Subtotal:</h3>
            {/* Rounding on subtotal due to inconsistent api sig figs. It's free I guess.. */}
            <h3 className="subtotal">${parseFloat((subtotal).toFixed(2))}</h3> 
            <h3 className="shippingTitle">Shipping:</h3>
            <h3 className="shipping">$0.00</h3>
            <h3 className="taxTitle">Tax:</h3>
            <h3 className="tax">${tax}</h3>
            <h2 className="orderTotalTitle">Order Total:</h2>
            <h2 className="orderTotal">${orderTotal}</h2>
        </div>
        
    
    </div>
   )
}
