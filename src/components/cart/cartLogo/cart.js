import './cart.css'
import cart from '../../../assets/cart.png'

const Cart = (props) => {

    return (
        <div className='carrito'>
            <a href='#'><img src={cart} alt='cart' /><p className='cartNumber'>{props.numero}</p></a>

        </div>
    )
}


export default Cart