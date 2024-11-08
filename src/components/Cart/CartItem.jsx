export default function CartItem({src, productName }){
    return(
        <div className="CartItem">
            <h3 className='productName'>{productName}</h3>
            <img src={src} alt="" />
        </div>
    )

}