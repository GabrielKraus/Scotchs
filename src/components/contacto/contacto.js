import "./contacto.css"
const Contacto = () => {

    return (
        <div className="contacto">
            <div className="contactForm">
                <div className="FormItems">
                    <label for="name" class="form-label" className="labelItem">Nombre: </label>
                    <input type="text" placeholder="Su Nombre: " id="name" className="inputItem" />
                    <label for="mail" class="form-label" className="labelItem">Correo : </label>
                    <input type="mail" placeholder="Su Correo Electronico: " id="mail" className="inputItem" />
                    <label for="mensaje" class="form-label" className="labelItem">Mensaje: </label>
                    <textarea placeholder="Su Mensaje: " id="mensaje" className="inputItem" />
                </div>
                <input id="submitButton" type="submit" value="Enviar" />
            </div>
        </div>
    )
}

export default Contacto