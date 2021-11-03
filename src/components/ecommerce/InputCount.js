import React, { useState } from 'react'
import {RiAddCircleLine} from 'react-icons/ri'
import {BsDashCircle} from 'react-icons/bs'

export const InputCount = ({stockProduct, initialAmount= 1}) => {

    const [counter, setCounter] = useState(initialAmount);

    const handleIncrementCounter = () => {
        if (counter < stockProduct ) {
            setCounter(counter + 1)
        }
    }
    const handleDrecementCounter = () => {
        if (counter > 0) {
            setCounter(counter-1)
        }
    }

    return (
        <div className = "bg-gray-400 w-52 text-center ">
            <p className = "text-2xl mb-5">Laptop asus</p>
            <div className = "flex items-center gap-2 justify-center mb-2">
                <BsDashCircle 
                    className = "text-xl cursor-pointer"
                    onClick = {handleDrecementCounter}
                ></BsDashCircle>
                <span> {counter} </span>
                <RiAddCircleLine 
                    className = "text-2xl cursor-pointer"
                    onClick = {handleIncrementCounter}
                ></RiAddCircleLine>
            </div>

            <button className = "my-2 rounded-md bg-blue-500 p-2">Agregar al carrito</button>
        </div>
    )
}
