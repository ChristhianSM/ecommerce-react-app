import React, { useEffect, useState } from 'react'
import {BiHeart} from 'react-icons/bi'
import { useHistory } from 'react-router';
import { InputCount } from './InputCount'
import { SimilarProducts } from './SimilarProducts';

export const ItemDetail = ({product}) => {

    const history = useHistory();
    // statePara productos con la misma categoria
    const [similarProducts, setSimilarProducts] = useState([]);
    const [amount, setAmount] = useState(1);
    const [finishShop, setFinishShop] = useState(false);

    useEffect(() => {
        const getSimilarProducts = async() => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${product.category}`);
            const data = await response.json();
            setSimilarProducts(data)
        }
        getSimilarProducts();
    }, [product.category]);

    const handleAddProduct = () => {
        const newProduct = {
            ...product,
            amount
        }

        setFinishShop(true);
        console.log(newProduct);
    }
    
    const handleFinishShop = () => {
        history.push("/cart")
    }

    return (
        <section className = "mx-auto max-w-4xl container ">
                <div className = "flex mt-10 gap-10 items-center">
                    <div className = "w-1/2">
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

                        {
                            !finishShop &&
                            <div>
                                <InputCount 
                                    setAmount = {setAmount}
                                    amount = {amount}
                                    stockProduct = {10}
                                />
                            </div>
                        }

                        <div className = "flex w-full bg-purple-500 rounded-lg border-purple-500 border-2 overflow-hidden">
                            <div className = "w-20 p-2 bg-white" >
                                <BiHeart className = "w-10 h-8 mx-auto text-purple-500"/>
                            </div>
                            {
                               !finishShop ? 
                                <button 
                                    className = "w-full text-white font-medium text-lg"
                                    onClick = {handleAddProduct}
                                >
                                    Agregar al carrito de compras
                                </button>
                                :
                                <button 
                                    className = "w-full text-white font-medium text-lg"
                                    onClick = {handleFinishShop}
                                >
                                    Finalizar Compra
                                </button>

                            }
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
