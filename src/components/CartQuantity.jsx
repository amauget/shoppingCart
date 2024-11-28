export default function CartQuantity({ item, quantity = 1, changeCartQuantity }){
    const values = [1,2,3,4,5]

    return (
        <select 
            name="quantity" 
            id="quantity" 
            value={quantity} 
            onChange={(e) => changeCartQuantity(Number(e.target.value))}
        >
            {values.map(value => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
   
}