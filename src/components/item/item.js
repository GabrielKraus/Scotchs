import Minus from "../../assets/minus.png"
import Plus from "../../assets/plus.png"
import React from "react";
import { Link } from "react-router-dom"



const Item = (props) => {

    

    return (

        
        <li className="productContainer">
            <div className="producto">
                <img src={props.img} alt="product" />
                <p id="brand">{props.brand}</p>
                <p>{props.name}</p>
                <h3>{`$${props.price}`}</h3>
                
                
            </div>
            <Link id="buyButton" to={`/productos/item/${props.id}`}>Ver Detalles</Link>
        </li>
    )
}

export default Item