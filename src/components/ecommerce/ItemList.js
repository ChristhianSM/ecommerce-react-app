import React from 'react'
import { Item } from './Item'

export const ItemList = ({products}) => {
    return (
        <div className = "container mx-auto max-w-7xl pt-10">
            <div className = "grid grid-cols-4 gap-3">
                {
                    products.map( product => {
                        return(
                            <Item 
                                key= {product.id}
                                product = {product}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
