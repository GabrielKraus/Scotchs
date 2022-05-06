import './cart.css'
import Context from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import eliminar from '../../assets/eliminar.png'
import eliminar2 from '../../assets/eliminar2.png'
import swal from 'sweetalert'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
const Cart = () => {
    const [confirmationForm, setConfirmationForm] = useState()
    const { cart, removeItem, clearCart, cartPrice } = useContext(Context)
    let priceTaxes = cartPrice() * 0.21;
    let envio = cartPrice()*0.05;
    let totalPrice = priceTaxes + cartPrice() + envio;
    const createOrder = (nombre, telefono, correo, calle, numero, cp, ciudad) => {
        const objOrder = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: correo,
                address: {
                    street: calle,
                    houseNumber: numero,
                    postalCode: cp,
                    city: ciudad
                }
            },
            items: cart,
            total: totalPrice
        }
        const batch = writeBatch(firestoreDb)
        const outOfStock = []
        const ids = cart.map(el => el.id)
        const collectionRef = collection(firestoreDb, `products`)
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const productQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity
                    if (dataDoc.stock >= productQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - productQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, `orders`)
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: `outOfStockError`, products: outOfStock })
                }
            }).then(() => {
                batch.commit()
                compraConfirmada(nombre, calle, numero, ciudad)
            }).catch((error) => {
                if (error && error.name === 'outOfStockError' && error.products.length > 0) {
                    setConfirmationForm()
                    console.log(error.products)
                    let productos = error.products
                    productos.forEach(el => console.log(el.dataDoc.brand))
                    let texto = ``
                    productos.forEach((product)=> texto+=`${product.dataDoc.brand} ${product.dataDoc.name} \n` )
                    swal({
                        title: "Los siguientes productos estan fuera de stock: ",
                        text: texto,
                        icon: 'error',
                        button: "Aceptar"
                    })
                } else {
                    console.log(error)
                }
            })
    }
    const compraConfirmada = (name, calle, numero, ciudad) =>{
        swal({
            title: "Compra Confirmada",
            text: `${name} su compra se ha realizado con exito y sera enviada a ${calle}, ${numero}, ${ciudad}`,
            icon: 'success',
            button: "Aceptar"
        }).then(clearCart())
    }
    const orderForm = () => {
        setConfirmationForm(
            <div className='orderForm'>
                <img className='orderFormQuit' src={eliminar2} alt="x" onClick={()=> { setConfirmationForm()}}/>
                <div className='formContainer'>
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" placeholder="Su Nombre: " id="name" name="name" className='orderFormItem'/>
                    <label htmlFor="phone">Telefono: </label>
                    <input type="number" placeholder="Su Telefono: " id="phone" name="phone" className='orderFormItem'/>
                    <label htmlFor="email">Correo : </label>
                    <input type="email" placeholder="Su Correo Electronico: " id="email" name="email" className='orderFormItem'/>
                    <div className='adress'>
                        <label htmlFor="street">Direccion: </label>
                        <input type="text" placeholder="Calle: " id="street" name="street" className='orderFormItem'/>
                        <input type="number" placeholder="Numero: " id="number" name="number" className='orderFormItem'/>
                        <input type="text" placeholder="Codigo Postal: " id="postalCode" name="postalCode" className='orderFormItem'/>
                        <input type="text" placeholder="Ciudad: " id="city" name="city" className='orderFormItem'/>
                    </div>
                </div>
                <h2 className='finalizarCompraBtn' onClick={() => {
                    const nombre = document.getElementById('name').value
                    const telefono = document.getElementById('phone').value
                    const correo = document.getElementById('email').value
                    const numero = document.getElementById('number').value
                    const cp = document.getElementById('postalCode').value
                    const ciudad = document.getElementById('city').value
                    const calle = document.getElementById('street').value
                    createOrder(nombre, telefono, correo, calle, numero, cp, ciudad)
                }}>Finalizar Compra</h2>
            </div>
        )
    }
    return (
        cart.length === 0 ?
            <div className='emptyCartView'>
                <h2>Su carrito se encuentra vacio</h2>
                <p>Mire nuestro catalogo de productos y elija lo mejor para usted: </p>
                <Link to='/productos' className='link'>Ver Productos</Link>
            </div> :
            <div className='cartView'>
                {confirmationForm}
                <div className='cartProductList'>
                    {cart.map(product => <div key={product.id} className='cartProduct'>
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
                        <img onClick={() => removeItem(product.id)} className='deleteBtn' src={eliminar} alt="eliminar" />
                    </div>)}
                </div>
                <div className='cartAside'>
                    <h2 className='dumpCartBtn' onClick={clearCart}>Vaciar Carrito</h2>
                    <div className='cartAsideInfo'>
                        <h2>Sub-Total: ${cartPrice()}</h2>
                        <h3 className='disabled'>Envio: ${envio.toFixed(2)}</h3>
                        <h3 className='disabled'>Impuestos: ${priceTaxes.toFixed(2)}</h3>
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        <h2 className='buyBtn' onClick={orderForm}>Confirmar Compra</h2>
                    </div>
                </div>
            </div>
    )
}
export default Cart