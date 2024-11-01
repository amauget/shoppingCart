import { vi, describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Product from './Product'

describe("App component", () =>{
    it("renders correct props", () =>{
        render(<Product 
            src = 'https://WWW.SOMEURL.COM'
            alt ='product image'
            productName="Men's Hoodie"
            rating = '5'
            handleAddToCart>

            </Product>
        )
    })
})