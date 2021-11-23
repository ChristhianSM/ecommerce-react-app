import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export const ShoppingCartEmpty = () => {
    return (
        <div className = "flex flex-col justify-center items-center py-20 animate__animated animate__bounceIn">
            <AiOutlineShoppingCart className = "text-8xl text-purple-500"></AiOutlineShoppingCart>
            <p className = "font-bold text-3xl my-5">¡TU CARRITO ESTÁ VACÍO!</p>
            <p className = "text-sm">Aún no has añadido productos para tu compra</p>
            <p className = "font-semibold text-xl my-5">Continuá eligiendo productos desde aquí:</p>
            <Link to= "/" className = "bg-purple-500 text-white p-2 text-lg rounded-xl px-4 hover:bg-purple-600">
                Seguir comprando
            </Link>
        </div>
    )
}
