import { getProducts } from "../../asyncmock"
import React from "react"
import { useState, useEffect } from "react"
import "./itemListContainer.css"
import ItemList from "../itemList/itemList"


const ItemListContainer = () =>{

    const[products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(response => {
            setProducts(response)
        })
    },[])


    return(
        <ItemList products={products}/>
    )
}

export default ItemListContainer