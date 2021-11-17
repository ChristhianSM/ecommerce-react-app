import React, { useEffect, useState } from 'react'
import {BiHeart} from 'react-icons/bi'
import { InputCount } from './InputCount'
import { SimilarProducts } from './SimilarProducts';

export const ItemDetail = ({product}) => {

    // statePara productos con la misma categoria
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const getSimilarProducts = async() => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${product.category}`);
            const data = await response.json();
            setSimilarProducts(data)
        }
        getSimilarProducts();
    }, [product.category])
    
    return (
        <section className = "mx-auto max-w-4xl container ">
                <div className = "flex mt-10 gap-10">
                    <div className = "w-1/2 h-96">
                        <img src={product.image} alt="" className = "m-auto object-contain w-full h-full"/>
                    </div>
                    <div className = "w-1/2">
                        <h3 className = "font-bold text-2xl mb-5">{product.title}</h3>
                        <p className = "font-normal text-xl mb-5">{product.description}</p>
                        <div className = "flex justify-between mb-2 font-light text-lg">
                            <p className = "">Categoria </p>
                            <p>{product.category}</p>
                        </div>
                        <div className = "flex justify-between mb-2 font-medium text-lg">
                            <p>Ahora</p>
                            <p>S/. {product.price}</p>
                        </div>

                        <div>
                            <InputCount 
                                stockProduct = {10}
                            />
                        </div>

                        <div className = "flex w-full bg-purple-500 rounded-lg border-purple-500 border-2 overflow-hidden">
                            <div className = "w-20 p-2 bg-white" >
                                <BiHeart className = "w-10 h-8 mx-auto text-purple-500"/>
                            </div>
                            <button className = "w-full text-white font-medium text-lg">
                                Agregar al carrito de compras
                            </button>
                        </div>
                    </div>
                </div>
                <div className = "border-t border-gray-300 mt-10">
                    <p className = "mt-5 font-bold text-xl">Los clientes tambien vieron</p>
                    <SimilarProducts 
                        similarProducts = {similarProducts}
                    />
                </div>
            </section>
    )
}
