import { getProductById } from "../../asyncmock"
import React from "react"
import { useState, useEffect } from "react"
import ItemDetails from "../itemDetail/itemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () =>{

    const[product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductById(id).then(prod => {
            setProduct(prod)
        })
    }, [id])




    return(

        <ItemDetails id={product.id} brand={product.brand} name={product.name} country={product.country} volume={product.volume} price={product.price} img={product.img} category={product.category} stock={product.stock} desc={product.desc}/>
    )
}

export default ItemDetailContainer