import { useParams } from "react-router-dom"
const Contacto = () =>{
    const params = useParams()
    console.log(params)
    return(
        <h1>Contacto {params.name}</h1>
    )
}

export default Contacto