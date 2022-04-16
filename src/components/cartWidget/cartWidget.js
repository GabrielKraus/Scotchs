import Context from '../../context/CartContext'
import { useContext } from 'react'
import cartImg from '../../assets/cart.png'
import { Link } from "react-router-dom"

const CartWidget = () => {

    const  { getCantidad } = useContext(Context)
    return (
        <div className='carrito'>
            <Link to={"/cart"}><img src={cartImg} alt='cart' /></Link>
            <p className='carritoCount'>{getCantidad()}</p>
        </div>
    )
}

export default CartWidget