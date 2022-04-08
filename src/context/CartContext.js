import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const [cartLength, setCartLength] = useState(0)

    console.log(cart)


    const addItem = (product, quantity) => {

        let repeatedProducts = cart.find(el=> el.id === product.id)


        if (repeatedProducts && (repeatedProducts.quantity + quantity) <= product.stock) {
            repeatedProducts.quantity += quantity
            getCantidad()
        }else if (repeatedProducts && repeatedProducts.quantity + quantity > product.stock) {
            console.log("Stock alcanzado")
        } else{
            const objItemCart = {
                        ...product,
                        quantity
                    }
            setCart([...cart, objItemCart])
        
        }

        
        
    }

    // const clearCart = () => {
    //     
    // }

    const getCantidad = () => {
        let cantidad = 0
        for(let i = 0; i<cart.length; i++){
            cantidad = cantidad + cart[i].quantity
        }
        setCartLength(cantidad)
        return cartLength
    }

    return(
        <Context.Provider value={{cart, setCart, addItem, getCantidad}}>
            {children}
        </Context.Provider>
    )
}


export default Context