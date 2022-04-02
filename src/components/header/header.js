import './style.css'
import logo from '../../assets/logo.png'
import Cart from '../cart/cart'
import  {Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <div className="headerMenu">
                <div className='menuBrand'>
                    <img src={logo} alt='logo' />
                    <h1>Scotch's</h1>
                </div>
                <div className='menuBar'>
                    <Link className='link' to='/'>Inicio</Link>
                    <Link className='link' to='/productos'>Productos</Link>
                    <Link className='link' to='/sobrenosotros'>Nosotros</Link>
                    <Link className='link' to='/contacto'>Contacto</Link>
                </div>
            </div>
            <div className="headerSearchBar">
                <div className='searchBarButton'>
                    <button>Login</button>
                    <button>Registrarse</button>
                </div>
                <Cart />
                <div className='searchBarInput'>
                    <input type='search' placeholder='Buscar...' />
                </div>
            </div>
        </div>
    )
}


export default Header