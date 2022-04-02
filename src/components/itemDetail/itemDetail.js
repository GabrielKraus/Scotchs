import "./itemDetail.css"
import logo from "../../assets/logo.png"

import React, { useState, useEffect } from "react"


const ItemDetails = (props) => {

    const product = props.products



    // Pantalla de Carga
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])


    return (

        <div>
            {loading ? 
            <div className="carga">
                <img src={logo} alt="cargando" />
            </div>
            :
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
            </div >}
        </div>



    )
}

export default ItemDetails