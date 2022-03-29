const Item = (props) =>{

    return(
        <li key={props.id} className="productContainer">
            <div className="producto">
                <img src={props.img} alt="product"/>
                <p id="brand">{props.brand}</p>
                <p>{props.name}</p>
                <h3>{`$${props.price}`}</h3>
                <button>Ver Detalles</button>
            </div>
            <button id="buyButton">Comprar</button>
        </li>
    )
}

export default Item