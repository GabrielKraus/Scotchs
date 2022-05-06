import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./slideShow.css"
import Right from "../../assets/right.png"
import Left from "../../assets/left.png"

import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"



const SlideShow = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const collectionRef = query(collection(firestoreDb, 'products'), where('destacado', '==', true))
        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    }, [])


    const [current, setCurrent] = useState(0);
    const length = products.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(products) || products.length <= 0) {
        return null;
    }

    return (
        <section className='slideShow'>
            <div className="slideShowControls">
                <img alt="flecha" src={Left} className="slideShowControlsLeft slideShowControlsButton" onClick={prevSlide} />
                <img alt="flecha" src={Right} className="slideShowControlsRight slideShowControlsButton" onClick={nextSlide} />
            </div>
            {products.map((product, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <div className="slideShowProduct" id={`slideShowProducts${product.id}`}>
                                <div className="slideShowProductImagenContainer">
                                    <img className="slideShowProductImagen" src={product.img} alt="producto" />
                                </div>
                                <div className="slideShowInfo">
                                    <div className="slideShowInfoNombre">
                                        <p className="slideShowInfoNombreBrand">{product.brand} </p>
                                        <p>{product.name}</p>
                                    </div>
                                    <p className="disabled">Origen: {product.country}</p>
                                    <p className="disabled">Cantidad: {product.volume}</p>
                                    <p className="slideShowInfoPrice">${product.price}</p>
                                    <Link className="slideShowLink" to={`/productos/item/${product.id}`} > <button className="slideShowInfoButton">Ver Detalles</button> </Link>
                                </div>
                            </div>)}
                    </div>
                );
            })}
        </section>
    );
};

export default SlideShow