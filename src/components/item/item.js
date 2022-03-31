import Minus from "../../assets/minus.png"
import Plus from "../../assets/plus.png"
import React from "react";

const Item = (props) =>{

    const[productCounter, setProductCouner] = React.useState(0);

    const increment = (stock) => {productCounter<stock ? setProductCouner(productCounter + 1) : setProductCouner(productCounter) }
    const decrement =() => {productCounter>0 ? setProductCouner(productCounter - 1) : setProductCouner(productCounter) }
    const buyButton = () => {setProductCouner(0)}

    return(
        <li className="productContainer">
            <div className="producto">
                <img src={props.img} alt="product"/>
                <p id="brand">{props.brand}</p>
                <p>{props.name}</p>
                <h3>{`$${props.price}`}</h3>
                <button>Ver Detalles</button>
                <div className="counter">
                <img src={Minus} alt="Minus" onClick={decrement}/>
                <p>{productCounter}</p>
                <img src={Plus} alt="Plus" onClick={() => increment(props.stock)}/>
                </div>
            </div>
            <button id="buyButton" onClick={buyButton}>Comprar</button>
        </li>
    )
}

export default Item