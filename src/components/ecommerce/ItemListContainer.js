import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NavBar } from '../ui/NavBar';
import { Spinner } from '../ui/Spinner';
import { ItemList } from './ItemList'

export const ItemListContainer = () => {    

    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    // Loading de carga 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getProducts = async() => {
            if (categoryId) {
                const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
                const data = await response.json();
                setProducts(data)
                setLoading(false)
            }else{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data)
                setLoading(false)
            }
        }
        getProducts();
    }, [categoryId])

    return (
        <>
            <NavBar />
            <div className = "bg-gray-300 h-full">
                {
                    loading 
                    ? <Spinner />
                    : <ItemList 
                        products = {products}
                    />
                }
            </div>
        </>
    )
}