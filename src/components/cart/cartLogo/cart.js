import './cart.css'
import cart from '../../../assets/cart.png'

const Cart = () => {

    return (
        <div className='carrito'>
            <a href='#'><img src={cart} alt='cart' /><p className='cartNumber'>0</p></a>

        </div>
    )
}


export default Cart