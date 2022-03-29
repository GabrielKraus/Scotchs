const Item = (props) =>{

    return(
        <div className="productContainer">
            <li key={props.id} className="producto">
                <img src={props.img} alt="product"/>
                <p id="brand">{props.brand}</p>
                <p>{props.name}</p>
                <h3>{`$${props.price}`}</h3>
                <button>Ver Detalles</button>
            </li>
            <button id="buyButton">Comprar</button>
        </div>
    )
}

export default Item