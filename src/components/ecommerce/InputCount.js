import React, { useState } from 'react'

export const InputCount = ({stockProduct, setAmount, amount}) => {
    
    const [isLimitStock, setIsLimitStock] = useState(false);

    const handleIncrementCounter = () => {
        if (amount < stockProduct ) {
            setAmount(amount + 1)
        }
    }
    const handleDecrementCounter = () => {
        if (amount > 1) {
            setAmount(amount-1)
        }
    }

    const handleInputAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleBlurInput = (e) => {
        if (parseInt(e.target.value) > stockProduct) {
            setIsLimitStock(true); 
            return
        }
        setIsLimitStock(false)
    }

    return (
        <div className = "">
            <div className = "flex flex-col gap-2 justify-center mb-2">
                <div className = "relative">
                    <button 
                        className = "absolute text-2xl border border-black h-full px-2 bg-gray-400 rounded-tl-lg rounded-bl-lg"
                        onClick = {handleDecrementCounter}
                    > - </button>
                    <input 
                        type="text" 
                        className = "border-2 w-full py-1 rounded-tl-lg outline-none text-black px-10 text-center"
                        name = "amount"
                        value = {amount}
                        onChange = {(e) => {
                            handleInputAmount(e)
                        }}
                        onBlur = {handleBlurInput}
                    />
                    <button 
                        className = "absolute right-0 text-2xl border border-black h-full px-2 bg-gray-400 rounded-tr-lg rounded-br-lg"
                        onClick = {handleIncrementCounter}
                        > + </button>
                </div>
                {
                    isLimitStock && <p>Solamente tenemos {stockProduct} unidades de este producto</p>
                }
            </div>
        </div>
    )
}
