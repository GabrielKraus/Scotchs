import './cart.css'
import cartImg from '../../assets/cart.png'
import { Link } from "react-router-dom"
import Context from '../../context/CartContext'
import { useContext } from 'react'

const Cart = () => {

    const  { getCantidad } = useContext(Context)


    return (
        <div className='carrito'>
            <Link to={"/cart"}><img src={cartImg} alt='cart' /></Link>
            <p className='carritoCount'>{getCantidad()}</p>
        </div>
    )
}


export default Cart