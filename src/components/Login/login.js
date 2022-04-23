import './login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'



const Login =() => {
    const [logPermission, setLogPermission] = useState(false)

    

    const log = () =>{
        const collectionRef = collection(firestoreDb, `adminUser`)
        getDocs(query(collectionRef), where('name', '==', "admin") && where('pas', '==', "nimda13")).then((res)=>console.log(res))

    }

    return(
        <div className='loginPage'>
            <div className='loginContainer'>
                <img className='loginLogo' src={logo} alt="logo"/>
                <div className='loginForm'>
                    <h2>Entrar:</h2>
                    <form>
                        <label htmlFor='user'>Usuario:</label>
                        <input type='text' id='user'></input>

                        <label htmlFor='pass'>Contraseña:</label>
                        <input type='text' id='pass'></input>
                    </form>
                    <button onClick={log}>Ingresar</button>
                </div>
            </div>
        </div>
    );
}

export default Login