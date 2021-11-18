import React from 'react'
import {RiAddCircleLine} from 'react-icons/ri'
import {BsDashCircle} from 'react-icons/bs'

export const InputCount = ({stockProduct, setAmount, amount}) => {


    const handleIncrementCounter = () => {
        if (amount < stockProduct ) {
            setAmount(amount + 1)
        }
    }
    const handleDrecementCounter = () => {
        if (amount > 0) {
            setAmount(amount-1)
        }
    }

    return (
        <div className = "w-52 mx-auto ">
            <div className = "flex flex-col items-center gap-2 justify-center mb-2">
                <p>Stock {stockProduct}</p>
                <div>
                    <button onClick = {handleDrecementCounter}>
                        <BsDashCircle  className = "text-xl"></BsDashCircle>
                    </button>
                    <span> {amount} </span>
                    <button onClick = {handleIncrementCounter}>
                        <RiAddCircleLine className = "text-2xl"></RiAddCircleLine>
                    </button>
                </div>
            </div>
        </div>
    )
}
