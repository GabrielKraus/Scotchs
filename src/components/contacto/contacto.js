import "./contacto.css"
import { useForm, ValidationError } from '@formspree/react';

const Contacto = () => {

    const [state, handleSubmit] = useForm("xyyonbkl");

    return (
        <div className="contacto">
            <div className="contactForm">
                <form onSubmit={handleSubmit} className="FormItems">

                    <label for="name" className="labelItem">Nombre: </label>
                    <input type="text" placeholder="Su Nombre: " id="name" name="name" className="inputItem" />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />


                    <label for="email" className="labelItem" htmlFor="email">Correo : </label>
                    <input type="email" placeholder="Su Correo Electronico: " id="email" className="inputItem" name="email" />

                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label for="message" className="labelItem" >Mensaje: </label>
                    <textarea placeholder="Su Mensaje: " id="message" className="inputItem" name="message" />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button id="submitButton" type="submit" disabled={state.submitting}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contacto