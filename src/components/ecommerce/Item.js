import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({product}) => {
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-2 p-4">
            <Link to = {`/item/${product.id}`} >
                <div className="px-4 py-2">
                    <h1 className="text-gray-900 font-bold text-lg uppercase h-20 align-middle ">{product.title}</h1>
                    <p className="text-gray-600 text-sm mt-1 h-20 overflow-y-scroll">{product.description}</p>
                </div>
                <img className="h-56 w-full object-contain mt-2" src={product.image} alt="NIKE AIR" />
            </Link>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-gray-200 font-bold text-xl">$ {product.price}</h1>
                <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to card</button>
            </div>
        </div>
    )
}
