import React from "react"
import { useState, useEffect } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'


import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemListContainerCategory = () =>{

    const[products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(()=>{
        const collectionRef = category ? query(collection(firestoreDb, 'products'), where('category', '==', category)) : collection(firestoreDb, 'products')
        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    },[category])


    return(
        <ItemList products={products}/>
    )
}

export default ItemListContainerCategory