import './style.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"


const Footer = () => {



    return (
        <div className="footerBar">
            <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                    <h2>Scotch's</h2>
                </Link>
            <div className='footerBarLogin'>
                <Link className='login' to='/login'><h3>Login</h3></Link>
            </div>
        </div>
    )
}


export default Footer