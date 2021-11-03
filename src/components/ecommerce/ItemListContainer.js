import React, { useState } from 'react'
import { InputCount } from './InputCount'

export const ItemListContainer = () => {

    return (
        <div className = "bg-gray-300 h-screen">
            <InputCount 
                stockProduct = {10}
                initialAmount = {5}
            />
        </div>
    )
}
