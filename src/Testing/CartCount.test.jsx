import { it, expect, describe, afterEach } from "vitest"
import CartCount from "../components/Cart/CartCount"
import { render, cleanup } from "@testing-library/react"

describe('Cart count component', () => {

    afterEach(() => {
        // Clean up prop after each test
        cleanup()
    })

    it('displays "2" w/ single quantities', () => {
        render(
            <CartCount 
                cart={[{item: "a", selected: 1}, {item: 'b', selected: 1}]}
            />
        )
        const count = document.querySelector('.cartCount')

        expect(parseInt(count.textContent)).toEqual(2)
    })

    it('displays "7" w/ varied quantities', () => {
        render(
            <CartCount 
                cart={[{item: 'a', selected: 2}, {item: 'b', selected: 4}, {item: 'c', selected: 1}]}
            />
        )
        const count = document.querySelector('.cartCount')

        expect(parseInt(count.textContent)).toEqual(7)
    })
})
