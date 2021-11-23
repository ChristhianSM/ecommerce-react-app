import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BiHeart} from 'react-icons/bi'
import { useHistory } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { InputCount } from './InputCount'
import { SimilarProducts } from './SimilarProducts';

export const ItemDetail = ({product}) => {
    const history = useHistory();
    const { addProduct} = useContext(CartContext);

    // statePara productos con la misma categoria
    const [similarProducts, setSimilarProducts] = useState([]);
    const [amount, setAmount] = useState(product.amount || 1);
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
        addProduct(newProduct);
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
                            product.amount &&
                            <p className = "bg-gray-800 text-white my-2 mt-5 text-center w-1/2 mx-auto py-2 flex justify-center items-center">
                                En tu  
                                <span className = "inline-block mx-2">
                                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                </span>
                                hay {product.amount} unidades
                            </p>
                        }
                        {
                            !finishShop &&
                            <div>
                                <InputCount 
                                    setAmount = {setAmount}
                                    amount = {amount}
                                    stockProduct = {product.stock}
                                />
                            </div>
                        }

                        {
                            !finishShop ?
                            <div className = "flex w-full bg-purple-500 rounded-lg border-purple-500 border-2 overflow-hidden">
                                <div className = "w-20 p-2 bg-white" >
                                    <BiHeart className = "w-10 h-8 mx-auto text-purple-500"/>
                                </div>
                                <button 
                                    className = "w-full text-white font-medium text-lg"
                                    onClick = {handleAddProduct}
                                >
                                    Agregar al carrito de compras
                                </button>
                            </div>
                            :
                            <div className = "flex flex-col justify-center items-center animate__animated animate__slideInUp">
                                <button 
                                    className = "w-full text-white font-medium text-lg bg-purple-500 rounded-lg py-2"
                                    onClick = {handleFinishShop}
                                >Finalizar Compra
                                </button>
        
                                <button 
                                    className = "mt-4 bg-black text-white py-2 w-1/2"
                                    onClick = { () => setFinishShop(false)}
                                >Agregar mas</button>
                            </div>
                        }
                
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
