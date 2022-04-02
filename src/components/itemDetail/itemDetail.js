import "./itemDetail.css"

const ItemDetails = (props) => {

    const product = props.products





    return (

        <div>
            <div div className="detailContainer" >
                <img src={product.img} alt="productImg" />
                <div className="infoContainer">
                    <h3 className="name">{product.brand} <span>{product.name}</span></h3>
                    <div className="descContainer">
                        <h3>Descripción:</h3>
                        <p>{product.desc}</p>
                    </div>
                    <div className="altInfo">
                        <p className="disabled">Origen: {product.country}</p>
                        <p className="disabled">Cantidad: {product.volume}</p>
                    </div>
                    <h2 className="price"> Precio: ${product.price}</h2>
                </div>
            </div >
        </div>



    )
}

export default ItemDetails