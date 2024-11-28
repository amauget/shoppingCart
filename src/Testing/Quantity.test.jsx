import { vi, describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import Quantity from "../components/Quantity";

describe('Correctly renders and passes quantities', () =>{
    let quantity = 1
    const handleQuantity = vi.fn()
    render(
        <Quantity 
            quantity = {quantity}
            handleQuantity={handleQuantity}
        />
    )
    const select = document.querySelector('#quantity')
    it('passes a "number" data type', () =>{
        fireEvent.click(select)

        expect(typeof(quantity)).toEqual('number')
        expect(quantity).toEqual(1)

    })

    it('passes a new quantity', () =>{
        select.value = 2
        quantity = Number(select.value)

        fireEvent.click(select)

        expect(quantity).toEqual(2)
    })

})