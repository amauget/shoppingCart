export default function CartItem({ image, title, rating, price, removeFromCart }){
    return(
        <div className="cartItem">
            <h3 className='cartName'>{title}</h3>
            <img src={image} alt="" className="cartImg" />
            {/* <h3 className="cartRating">{rating.rate} Stars ({rating.count} Reviews)</h3> */}
            <h3 className="cartPrice">${price}</h3>
            <button className="removeItem" onClick={removeFromCart}>Remove Item</button>
        </div>
    )

}