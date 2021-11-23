import React, { useContext, useEffect, useState } from 'react'
import { IoReturnUpBackSharp } from 'react-icons/io5'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { getTotal } from '../../helpers/functions'
import { NavBar } from '../ui/NavBar'
import { ShoppingCartEmpty } from './ShoppingCartEmpty'
import { ShoppingCartProduct } from './ShoppingCartProduct'

export const ShoppingCart = () => {

    const {cartList, clearShoppingCart} = useContext(CartContext);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        const total = getTotal(cartList);
        setTotalProducts(total);
    }, [cartList])

    return (
        <div>
            <NavBar />
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                        <h2 className="font-semibold text-2xl">{cartList.length} Productos</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalle de los productos</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Cantidad</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Precio</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                    </div>
                        {   
                            cartList.length > 0 
                            ?cartList.map( product => {
                                return(
                                    <ShoppingCartProduct 
                                        product = {product}
                                        key = {product.id}
                                    />
                                )
                            })
                            : <ShoppingCartEmpty />
                        }
                    <div className = "flex justify-between items-center mt-10">
                        <Link to = "/">
                            <button className="flex font-semibold text-indigo-600 text-lg items-center gap-5">
                                <IoReturnUpBackSharp></IoReturnUpBackSharp>
                                Continue Shopping
                            </button>
                        </Link>
                        {
                            cartList.length !== 0  
                            &&
                            <button 
                                className="flex font-semibold text-indigo-600 text-lg items-center gap-2"
                                onClick = {clearShoppingCart}
                            >
                                <MdDeleteForever className = "text-2xl"></MdDeleteForever>
                                Vaciar Carrito de compras
                            </button>
                        }
                    </div>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Resumen de la compra</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">{cartList.length} Productos</span>
                        <span className="font-semibold text-sm">S/. {totalProducts.toFixed(2)}</span>
                    </div>

                    <div className="py-10">
                    <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$600</span>
                    </div>
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
