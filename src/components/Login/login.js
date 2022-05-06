import './login.css'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { addDoc, collection, query, getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
const Login = () => {
    const [loginAutorizado, setLoginAutorizado] = useState(false)
    const log = () => {
        const collectionRef = doc(firestoreDb, `adminUser`, "w4vv296l2n5pr5TnwfHV")
        getDoc(query(collectionRef)).then((querySnapshot) => {
            let user = { ...querySnapshot.data() }
            if (user.name === document.getElementById('user').value && user.pass === document.getElementById('pass').value) {
                setLoginAutorizado(true)
            }
        })
    }
    const agregarProducto = (marca, categoria, pais, descripcion, destacado, imagen, nombre, precio, stock, volumen) => {
        toast.success('Producto Agregado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const producto = {
            brand: marca,
            category: categoria,
            country: pais,
            desc: descripcion,
            destacado: destacado,
            img: imagen,
            name: nombre,
            price: precio,
            stock: stock,
            volume: volumen
        }
        const collectionRef = collection(firestoreDb, 'products')
        addDoc(collectionRef, producto)
    }
    return (
        !loginAutorizado ?
            <div className='loginPage'>
                <div className='loginContainer'>
                    <img className='loginLogo' src={logo} alt="logo" />
                    <div className='loginForm'>
                        <h2>Entrar:</h2>
                        <form>
                            <label htmlFor='user'>Usuario:</label>
                            <input type='text' id='user'></input>
                            <label htmlFor='pass'>Contraseña:</label>
                            <input type='password' id='pass'></input>
                        </form>
                        <button onClick={log}>Ingresar</button>
                    </div>
                </div>
            </div> :
            <div className='panelPage'>
                <ToastContainer />
                <div className='agregarProductos'>
                    <div>
                        <h2>Agregar Productos</h2>
                    </div>
                    <div className='agregarProductosFormContainer'>
                        <form className='agregarProductosForm'>
                                <label htmlFor='brand'>Marca:</label>
                                <input type='text' id='brand'></input>
                                <label htmlFor='name'>Nombre:</label>
                                <input type='text' id='name'></input>
                                <label htmlFor='price'>Precio:</label>
                                <input type='number' id='price'></input>
                                <label htmlFor='stock'>Stock:</label>
                                <input type='number' id='stock'></input>
                                <label htmlFor='volume'>Volumen:</label>
                                <input type='text' id='volume'></input>
                                <label htmlFor='category'>Categoria:</label>
                                <input type='text' id='category'></input>
                                <label htmlFor='country'>Pais:</label>
                                <input type='text' id='country'></input>
                                <label htmlFor='img'>Imagen:</label>
                                <input type='text' id='img'></input>
                                <label htmlFor='desc'>Descripcion:</label>
                                <input type='text' id='desc'></input>
                                <div className='destacadoCheckbox'>
                                <label htmlFor='destacado'>Destacado</label>
                                <input name="destacado" id='destacado' type="checkbox" />
                                </div>
                            <button type='reset' onClick={(e) => {
                                e.preventDefault()
                                const marca = document.getElementById(`brand`).value;
                                const categoria = document.getElementById(`category`).value;
                                const pais = document.getElementById(`country`).value;
                                const descripcion = document.getElementById(`desc`).value;
                                const destacado = document.getElementById(`destacado`).checked;
                                const imagen = document.getElementById(`img`).value;
                                const nombre = document.getElementById(`name`).value;
                                const precio = document.getElementById(`price`).value;
                                const stock = document.getElementById(`stock`).value;
                                const volumen = document.getElementById(`volume`).value;
                                agregarProducto(marca, categoria, pais, descripcion, destacado, imagen, nombre, precio, stock, volumen)
                            }}>Agregar</button>
                        </form>
                    </div>
                </div>
                
            </div>

    );
}

export default Login