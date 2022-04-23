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
                <div className='menuBar'>
                    <Link className='link' to='/'>Inicio</Link>
                    <Link className='link' to='/productos'>Productos</Link>
                    <Link className='link' to='/sobrenosotros'>Nosotros</Link>
                    <Link className='link' to='/contacto'>Contacto</Link>
                </div>
            </div>
            <div className="headerSearchBar">
                <div className='searchBarButton'>
                    <Link className='login' to='/login'>Login</Link>
                </div>
                
                <CartWidget />

                <div className='searchBarInput'>
                    <input type='search' placeholder='Buscar...' />
                </div>
            </div>
        </div>
    )
}


export default Header