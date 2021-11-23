import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const CardWidget = () => {
    return (
        <Link to= "/cart" className="login flex items-center">
            <AiOutlineShoppingCart className = "text-2xl"></AiOutlineShoppingCart>
            <p className = "m-2">Mi Carrito</p>
        </Link>
    )
}
