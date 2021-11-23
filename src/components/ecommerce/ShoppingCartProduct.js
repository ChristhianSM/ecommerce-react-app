import React, { useContext, useState } from 'react'
import {IoAddOutline, IoRemoveOutline} from 'react-icons/io5'
import { CartContext } from '../../context/CartContext';

export const ShoppingCartProduct = ({product}) => {
    const {deleteProduct, updateAmount} = useContext(CartContext)

    const [input, setInput] = useState(product.amount);

    const handleIncrementCounter = () => {
        if (input < product.stock ) {
            setInput(input + 1);
            updateAmount(product.id, input + 1)
        }
    }

    const handleDecrementCounter = () => {
        if (input > 1) {
            setInput(input-1)
            updateAmount(product.id, input - 1)
        }
    }

    const handleInputAmount = (e) => {
        setInput(e.target.value)
    }

    const handleBlurInput = (e) => {
        // if (parseInt(e.target.value) > stockProduct) {
        //     setIsLimitStock(true); 
        //     return
        // }
        // setIsLimitStock(false)
    }
    
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key = {product.id}>
            <div className="flex w-2/5">
                <div className="w-20">
                <img className="h-24" src={product.image} alt={product.title} />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">I{product.title}</span>
                <span className="text-red-500 text-xs">{product.category}</span>
                <button 
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    onClick = {() => {
                        deleteProduct(product.id)
                    }}
                >
                    Eliminar
                </button>
                </div>
            </div>
            <div className = "w-1/5">
                <div className="flex justify-center  items-center">
                    <button onClick = {handleDecrementCounter}>
                        <IoRemoveOutline></IoRemoveOutline>
                    </button>
                    <input 
                        className="mx-2 border text-center w-8" 
                        type="text" 
                        value={input} 
                        onBlur = {handleBlurInput}
                        onChange = {handleInputAmount}
                    />
                    <button onClick = {handleIncrementCounter}>
                        <IoAddOutline></IoAddOutline>
                    </button>
                </div>
                {
                    
                }
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">S/. {product.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">S/. {(product.price * product.amount).toFixed(2)}</span>
        </div>
    )
}
