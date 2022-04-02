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
        <ItemDetails products={product}/>
    )
}

export default ItemDetailContainer