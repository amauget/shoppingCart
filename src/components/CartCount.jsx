export default function CartCount({count}){
    console.log(count)
    let output = count
    if(count === 0){
        output = ''
    }
    return(   
        <h2 className='cartCount'>{output}</h2>
    )
}