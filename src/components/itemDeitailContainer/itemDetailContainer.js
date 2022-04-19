import React from "react"
import { useState, useEffect } from "react"
import ItemDetails from "../itemDetail/itemDetail"
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"


const ItemDetailContainer = () =>{

    const[product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const docRef = doc(firestoreDb, 'products', id)
        getDoc(docRef).then(querySnapshot => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
        })
    }, [id])




    return(

        <ItemDetails id={product.id} brand={product.brand} name={product.name} country={product.country} volume={product.volume} price={product.price} img={product.img} category={product.category} stock={product.stock} desc={product.desc}/>
    )
}

export default ItemDetailContainer