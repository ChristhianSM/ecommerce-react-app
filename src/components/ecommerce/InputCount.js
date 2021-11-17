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
        <div className = "w-52 mx-auto ">
            <div className = "flex items-center gap-2 justify-center mb-2">
                <button onClick = {handleDrecementCounter}>
                    <BsDashCircle  className = "text-xl"></BsDashCircle>
                </button>
                <span> {counter} </span>
                <button onClick = {handleIncrementCounter}>
                    <RiAddCircleLine className = "text-2xl"></RiAddCircleLine>
                </button>
            </div>
        </div>
    )
}
