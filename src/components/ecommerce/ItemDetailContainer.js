import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NavBar } from '../ui/NavBar';
import { Spinner } from '../ui/Spinner';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    // Obtenemos el parametro id del url para renderizar el producto seleccionado
    const {id} = useParams();
    const [product, setProduct] = useState({});

    // Loading
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const getItem = async() => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }
        getItem();
    }, [id]);

    return (

        <>
            <NavBar />
            {
                loading
                ? <Spinner />
                : <ItemDetail 
                    product = {product}
                  />
            }
        </>
    )
}
