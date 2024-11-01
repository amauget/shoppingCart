import { describe, it, expect } from "vitest";
import filterData from "./filterData";
import mockJSON from "./mockJSON";

const mockData = mockJSON()


it('correctly filters the data structure array based on category', ()=> {
    const electronics = filterData('electronics', mockData).length
    expect(electronics).toEqual(1)

    const men = filterData("men's clothing", mockData).length
    expect(men).toEqual(3)
})

it('Returns empty array if category is incorrect', () => {
    const emptyArray = filterData('Automotive', mockData).length
    expect(emptyArray).toEqual(0)
})

it('Returns all items if category is "products"', () =>{
    const products = filterData('products', mockData).length

    expect(products).toEqual(mockData.length)
})




