import { vi, describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter for testing
import Product from './Product'

const product = {
    category: "men's clothing",
    description: 
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 2,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    rating: {rate: 4.1, count: 259},
    title: "Mens Casual Premium Slim Fit T-Shirts " 
}

describe("App component", () =>{
    it("renders correct props", () =>{
        const handleViewItem = vi.fn()
        const handleAddToCart = vi.fn()
        render(
            <MemoryRouter>
                <Product
                    image={product.image}
                    title={product.title}
                    rate={product.rating.rate}
                    count={product.rating.count}
                    price={product.price}
                    handleAddToCart={handleAddToCart}
                    handleViewItem={() => handleViewItem(product)}
                />
            </MemoryRouter>
        )
         
            
    })
})