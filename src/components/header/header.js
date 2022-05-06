import './style.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"
import CartWidget from '../cartWidget/cartWidget'


const Header = () => {

    

    return (
        <div className="header">
            <div className="headerMenu">
                <Link to='/' className='menuBrand'>
                    <img src={logo} alt='logo' />
                    <h1>Scotch's</h1>
                </Link>

                <CartWidget />

                <div className='menuBar'>
                    <Link className='link' to='/'>Inicio</Link>
                    <Link className='link' to='/productos'>Productos</Link>
                    <Link className='link' to='/sobrenosotros'>Nosotros</Link>
                    <Link className='link' to='/contacto'>Contacto</Link>
                </div>
            </div>
        </div>
    )
}


export default Header