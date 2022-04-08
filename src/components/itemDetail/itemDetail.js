import "./itemDetail.css"
import ItemCount from "../itemCount/itemCount";
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Context from '../../context/CartContext'


const ItemDetails = ({id, brand, name, country, volume, price, img, category, stock, desc}) => {
    const [cantidad, setCantidad] = useState(0)


    const  { addItem } = useContext(Context)


    const onAdd = (count) => {
        setCantidad(count)
        addItem({id, brand, name, price}, count)
    }




    return (

        <div>
            <div div className="detailContainer" >
                <img src={img} alt="productImg" />

                <div className="infoContainer">
                    <h3 className="name">{brand} <span>{name}</span></h3>

                    <div className="descContainer">
                        <h3>Descripción:</h3>
                        <p>{desc}</p>
                    </div>
                    <div className="altInfo">
                        <p className="disabled">Origen: {country}</p>
                        <p className="disabled">Cantidad: {volume}</p>
                        <p className="disabled">categoria: {category}</p>
                        <p className="disabled">stock: {stock}</p>
                    </div>
                    {cantidad === 0 ? <ItemCount onAdd={onAdd} stock={stock} /> : <Link to={"/cart"} className="goToCartButton">Ir al carrito</Link>}
                    <h2 className="price"> Precio: ${price}</h2>
                </div>
            </div >
        </div>



    )
}

export default ItemDetails