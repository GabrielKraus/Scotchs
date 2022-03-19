import './style.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'

const Header = () => {

    return (
        <div className="header">
            <div className="headerMenu">
                <div className='menuBrand'>
                    <img src={logo} alt='logo' />
                    <h1>Scotch's</h1>
                </div>
                <div className='menuBar'>
                    <a href='#'>Inicio</a>
                    <a href='#'>Productos</a>
                    <a href='#'>Sobre Nosotros</a>
                    <a href='#'>Contacto</a>
                </div>
            </div>
            <div className="headerSearchBar">
                <div className='searchBarButton'>
                    <button>Login</button>
                    <button>Registrarse</button>
                </div>
                <div className='carrito'>
                    <img src={cart} alt='cart' />
                </div>
                <div className='searchBarInput'>
                    <input type='search' placeholder='Buscar...' />
                </div>
            </div>
        </div>
    )
}


export default Header