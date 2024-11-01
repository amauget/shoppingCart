import { useState, useEffect } from "react"

const useFetchProductRequest = (category) => {
    const [products, updateProducts] = useState([]) // Initialize as an empty array
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const FetchProductData = async () => {
            try {
                let url = undefined
                category === 'products' ? url = 'https://fakestoreapi.com/products' : url = `https://fakestoreapi.com/products/category/${category}`
                
                const response = await fetch(url)
                
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
    }, [category])

    return { products, loading, error }
}
export default useFetchProductRequest