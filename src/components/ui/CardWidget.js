import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const CardWidget = () => {
    return (
        <div className="login flex items-center">
            <AiOutlineShoppingCart className = "text-2xl"></AiOutlineShoppingCart>
            <p className = "m-2">Mi Carrito</p>
        </div>
    )
}
