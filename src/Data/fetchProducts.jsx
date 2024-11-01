import { useEffect, useState } from "react"

const useFetchProductRequest = () => {
    const [products, updateProducts] = useState([]) // Initialize as an empty array
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const FetchProductData = async () => {
            try {
                
                const response = await fetch('https://fakestoreapi.com/products')
                
                
                if (!response.ok) {
                    throw new Error(`HTTP Error: Status ${response.status}`)
                }
    
                let postProducts = await response.json()
                updateProducts(postProducts)
                setError(null)
                
            } catch (err) {
                setError(err.message)
                updateProducts([]) // Ensure it's always an array
            } finally {
                setLoading(false)
            }
        }
        FetchProductData()
    }, [])


    return { products, loading, error }
}
export default useFetchProductRequest