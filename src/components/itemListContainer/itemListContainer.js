import React from "react"
import { useState, useEffect } from "react"
import ItemList from "../itemList/itemList"


import { getDocs, collection } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemListContainer = () =>{

    const[products, setProducts] = useState([])

    useEffect(()=>{

        const collectionRef = collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    },[])


    return(
        <ItemList products={products}/>
    )
}

export default ItemListContainer