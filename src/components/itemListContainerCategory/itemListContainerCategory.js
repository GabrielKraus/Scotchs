import { getProductByCat } from "../../asyncmock"
import React from "react"
import { useState, useEffect } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'


const ItemListContainerCategory = () =>{

    const[products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(()=>{
        getProductByCat(category).then(response => {
            setProducts(response)
        })
    },[category])


    return(
        <ItemList products={products}/>
    )
}

export default ItemListContainerCategory