import { vi, describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import fetchProductRequest from "./fetchProducts";
import { useState, useEffect } from "react"

describe('Api fetching', () =>{
    it('returns an object when component === "electronics"', async () =>{
        const data =  fetchProductRequest('electronics')
        expect(data.products).toHaveLength(6)
    })
})