import { useState } from 'react'
import './App.css'
import Login from './components/login/login'
import Home from './components/home/home';

function App() {
 const [accesso, setAccesso] = useState(1); // da settare a 0 e aggiungere logica per controllare se login già effettuato (localStorage)
  return (
    <>
    {
      accesso === 0 ? <Login setAccesso = {setAccesso}/> : <Home/>
    }  
    </>
  )
}

export default App
