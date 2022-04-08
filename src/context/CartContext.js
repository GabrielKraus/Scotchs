import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }

        setCart([...cart, objItemCart])
    }
    // const clearCart = () => {
    //     setCart([])
    // }

    return(
        <Context.Provider value={{cart, setCart, addItem}}>
            {children}
        </Context.Provider>
    )
}


export default Context