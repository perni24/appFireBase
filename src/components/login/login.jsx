import './login.css'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const username = useRef();
  const password = useRef();


  const conrollaCredenziali = () =>{
      
  }

  return (
    <>
    <div id="containerLogin">
        <img src="login.png" id="iconLogin"/>
        <span id="titoloLogin">Login</span>
        <form action="" id="formLogin">
            <label htmlFor="username" id="labelUsername"><FontAwesomeIcon icon={faUser}/> Username</label>
            <input type="text" id="username" ref={username} placeholder=''/>
            <label htmlFor="password" id="labelPassword"><FontAwesomeIcon icon={faLock}/> Password</label>
            <input type="password" id="password" ref={password} placeholder=''/>
            <div id="containerButtonLogin">
              <button type="submit" id="buttonLogin" onClick={conrollaCredenziali}>Login</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login
