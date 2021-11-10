import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getItem = async() => {
            const response = await fetch("https://fakestoreapi.com/products/1");
            const data = await response.json();
            setProduct(data)
        }
        getItem();
    }, []);


    return (
        <div>
            <ItemDetail 
                product = {product}
            />
        </div>
    )
}
