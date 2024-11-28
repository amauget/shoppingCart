export default function CartCount({ cart }){
    let output = 0
    cart.forEach(item =>{
        output += item.selected
    })
    if(output === 0){
        output = ''
    }
    return(   
        <h2 className='cartCount'>{output}</h2>
    )
}