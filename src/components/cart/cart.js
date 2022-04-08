import './cart.css'
import cartImg from '../../assets/cart.png'
import { Link } from "react-router-dom"

const Cart = () => {




    return (
        <div className='carrito'>
            <Link to={"/cart"}><img src={cartImg} alt='cart' /></Link>
            <p className='carritoCount'>3</p>
        </div>
    )
}


export default Cart