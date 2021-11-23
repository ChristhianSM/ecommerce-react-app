import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { NavBar } from '../ui/NavBar';
import { Spinner } from '../ui/Spinner';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    // Obtenemos el parametro id del url para renderizar el producto seleccionado
    const {id} = useParams();
    const {cartList} = useContext(CartContext);

    const [product, setProduct] = useState({});

    // Loading
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const existe = cartList.some( item => item.id === parseInt(id) );
        if (existe) {
            const productFound = cartList.find( item => item.id === parseInt(id) );
            setProduct(productFound);
            setLoading(false);
        }else{
            const getItem = async() => {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct({
                    ...data,
                    stock: 15
                });
                setLoading(false);
            }
            getItem();
        }
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
