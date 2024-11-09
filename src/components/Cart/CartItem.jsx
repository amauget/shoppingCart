export default function CartItem({ image, title, rating, price, removeFromCart }){
    return(
        <div className="CartItem">
            <h3 className='productName'>{title}</h3>
            <img src={image} alt="" className="productImg" />
            <h2 className="title">{title}</h2>
            <h3 className="rating">{rating.rate} Stars ({rating.count} Reviews)</h3>
            <h3 className="price">${price}</h3>
            <button className="removeItem" onClick={removeFromCart}>Remove Item</button>
        </div>
    )

}