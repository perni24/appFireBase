import './login.css'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login({setAccesso}) {
  const username = useRef(); // recuera contenuto dell'elemento senza possibilità di modifica
  const password = useRef(); // recuera contenuto dell'elemento senza possibilità di modifica
  const [showError, setShowError] = useState(false); //stato messaggio errore credenziali sbagliate


  const conrollaCredenziali = () =>{
      if(username.current.value === "admin" && password.current.value === "admin" ){ // mdificare con controllo credenziali (usare funzione che restituisce true o false)
        setShowError(false) 
        setAccesso(1) // valorizza uno stato del componente padre per cambio pagina
      }else{
        setShowError(true)
      }
  }

  return (
    <>
    <div id="containerLogin">
        <img src="login.png" id="iconLogin"/>
        <span id="titoloLogin">Login</span>
        <form action="" id="formLogin">
            <label htmlFor="username" id="labelUsername"><FontAwesomeIcon icon={faUser}/> Username</label>
            <input type="text" id="username" ref={username} placeholder='' style={{borderColor : showError ? "red" : ""}}/>
            <label htmlFor="password" id="labelPassword"><FontAwesomeIcon icon={faLock}/> Password</label>
            <input type="password" id="password" ref={password} placeholder=''  style={{borderColor : showError ? "red" : ""}}/>
            <span></span>
        </form>
        <div id="containerButtonLogin">
          <button type="submit" id="buttonLogin" onClick={conrollaCredenziali}>Login</button>
        </div>
        <div id='containrErroreLogin' style={{display : showError ? "block" : "none"}}>
          <span>Credenziali Errate</span>
        </div>
    </div>
    </>
  )
}

export default Login
