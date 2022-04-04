import "./inicio.css"
import  {Link } from "react-router-dom"
const Inicio = () =>{
    return(
        <div className="inicio">
            <div className="inicioOpciones">
                <Link to="/productos" className="opcionesProductos inicioOpcion">
                    <h2>TODOS LOS PRODUCTOS</h2>
                </Link>
                <Link to="/productos/categoria/bebidas" className="opcionesBebidas inicioOpcion">
                    <h2>BEBIDAS</h2>
                </Link>
                <Link to="/productos/categoria/tabacos" className="opcionesTabaco inicioOpcion">
                    <h2>TABACOS</h2>
                </Link>
            </div>
            <div className="inicioDestacados">

            </div>
        </div>
    )
}

export default Inicio