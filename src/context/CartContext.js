import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addProduct = (product) => {
        const existe = cartList.some( item => item.id === product.id );
        if (existe) {
            const updateProduct = cartList.map( item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        amount: item.amount + product.amount
                    }
                }else{
                    return item
                }
            })
            setCartList(updateProduct);
        }else{
            setCartList([...cartList, product])
        }
    }

    const updateAmount = (idProduct, amount) => {
        const products = cartList.map(product => {
            if (product.id === idProduct) {
                return {
                    ...product,
                    amount
                }   
            }else{
                return product
            }
        });
        setCartList(products);
    }

    const deleteProduct = (idProduct)=> {
        const products = cartList.filter(product => product.id !== idProduct);
        setCartList(products);
    }

    const clearShoppingCart = ()=> {
        setCartList([]);
    }

    return (
        <CartContext.Provider
            value = {{
                cartList,
                addProduct,
                updateAmount,
                deleteProduct,
                clearShoppingCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
