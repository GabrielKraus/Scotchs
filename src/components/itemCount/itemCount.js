import Minus from "../../assets/minus.png"
import Plus from "../../assets/plus.png"
import React from "react";
import "./itemCount.css"

const ItemCount = (props) => {
    const [productCounter, setProductCouner] = React.useState(1);

    const increment = (stock) => { productCounter < stock ? setProductCouner(productCounter + 1) : setProductCouner(productCounter) }
    const decrement = () => { productCounter > 0 ? setProductCouner(productCounter - 1) : setProductCouner(productCounter) }



    return (
        <div className="counterContainer">
            <div className="counter">
                <img src={Minus} alt="Minus" onClick={decrement} />
                <p>{productCounter}</p>
                <img src={Plus} alt="Plus" onClick={() => increment(props.stock)} />

            </div>
            <div className="addCart">
                <button onClick={() => props.onAdd(productCounter)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount