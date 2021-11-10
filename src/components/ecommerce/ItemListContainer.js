import React, { useEffect, useState } from 'react'
import { InputCount } from './InputCount'
import { ItemDetailContainer } from './ItemDetailContainer';
import { ItemList } from './ItemList'

export const ItemListContainer = () => {    

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async() => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data)
        }

        getProducts();
    }, [])

    return (
        <div className = "bg-gray-300 h-full">
            <ItemList 
                products = {products}
            />

            <ItemDetailContainer />
            <InputCount 
                stockProduct = {10}
                initialAmount = {5}
            />
        </div>
    )
}
