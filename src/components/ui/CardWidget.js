import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CardWidget = () => {
    const {cartList} = useContext(CartContext);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false);
        }, 2000);
    }, [cartList])


    return (
        <Link to= "/cart" className={`login flex items-center relative ${animation && "animate__animated animate__headShake"}`}>
            <AiOutlineShoppingCart className = "text-5xl"></AiOutlineShoppingCart>
            <p className = "absolute bg-red-500 rounded-full px-2 -bottom-1 -right-2 text-white text-center">{cartList.length}</p>
        </Link>
    )
}
