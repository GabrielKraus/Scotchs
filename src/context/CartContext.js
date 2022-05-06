import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const [cartLength, setCartLength] = useState(0)



    const addItem = (product, quantity, precioTotal) => {

        let repeatedProducts = cart.find(el=> el.id === product.id)


        if (repeatedProducts && (repeatedProducts.quantity + quantity) <= product.stock) {
            repeatedProducts.quantity += quantity
            getCantidad()
        }else if (repeatedProducts && repeatedProducts.quantity + quantity > product.stock) {
            alert("Stock alcanzado")
        } else{
            const objItemCart = {
                        ...product,
                        quantity,
                        precioTotal
                    }
            setCart([...cart, objItemCart])
        
        }

        
        
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (idNumber) =>{
        let index = cart.indexOf(cart.find(el => el.id === idNumber))
        cart.splice(index, 1)
        getCantidad()
    }

    const getCantidad = () => {
        let cantidad = 0
        for(let i = 0; i<cart.length; i++){
            cantidad = cantidad + cart[i].quantity
        }
        setCartLength(cantidad)
        return cartLength
    }

    const cartPrice = () =>{
        let cartPriceValue = 0
        cart.map(el => cartPriceValue+=el.precioTotal)

        return cartPriceValue
    }

    

    return(
        <Context.Provider value={{cart, setCart, addItem, getCantidad, removeItem, clearCart, cartPrice}}>
            {children}
        </Context.Provider>
    )
}


export default Context