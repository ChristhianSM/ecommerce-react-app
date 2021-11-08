import React from 'react'

export const Item = ({product}) => {
    return (
        <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 p-4">
            <div class="px-4 py-2">
                <h1 class="text-gray-900 font-bold text-lg uppercase h-20 align-middle ">{product.title}</h1>
                <p class="text-gray-600 text-sm mt-1 h-20 overflow-y-scroll">{product.description}</p>
            </div>
            <img class="h-56 w-full object-contain mt-2" src={product.image} alt="NIKE AIR" />
            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 class="text-gray-200 font-bold text-xl">$ {product.price}</h1>
                <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to card</button>
            </div>
        </div>
    )
}
