import './cart.css'
import Context from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import eliminar from '../../assets/eliminar.png'
const Cart = () => {

    const { cart, removeItem, clearCart, cartPrice} = useContext(Context)
    let pricePlusTaxes = cartPrice() * 0.21

    console.log(cart)

    return (
        cart.length === 0 ?
            <div className='emptyCartView'>
                <h2>Su carrito se encuentra vacio</h2>
                <p>Mire nuestro catalogo de productos y elija lo mejor para usted: </p>
                <Link to='/productos' className='link'>Ver Productos</Link>
            </div> :
            <div className='cartView'>
                <div className='cartProductList'>
                    {cart.map(product => <div className='cartProduct'>
                        <img className='productImg' src={product.img} alt="productImg" />
                        <div className='cartProductInfo'>
                            <div className='cartProductName'>
                                <h2 className='cartProductBrand disabled'>{product.brand}</h2>
                                <h2>{product.name}</h2>
                            </div>
                            <p>Cantidad: {product.quantity}</p>
                            <p>Precio por Unidad: ${product.price}</p>
                            <p>Precio Total: ${product.precioTotal}</p>
                        </div>
                        <img onClick={() => removeItem(product.id)} className='deleteBtn' src={eliminar} alt="eliminar"/>
                    </div>)}
                </div>
                <div className='cartAside'>
                    <h2 className='dumpCartBtn' onClick={clearCart}>Vaciar Carrito</h2>
                    <div className='cartAsideInfo'>
                        <h2>Sub-Total: ${cartPrice()}</h2>
                        


                        {/* esta parte la voy a cambiar usando el api de los correos */}
                        <h3 className='disabled'>Costo de envio: $350</h3>   

                        <h3 className='disabled'>impuestos: ${pricePlusTaxes.toFixed(2)}</h3>
                        <h2>Total: ${pricePlusTaxes+cartPrice()}</h2>
                        <h2 className='buyBtn'>COMPRAR</h2>

                    </div>
                </div>

            </div>
    )
}


export default Cart