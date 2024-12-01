import { useState } from 'react'
import './App.css'
import Login from './components/login/login'
import Home from './components/home/home';
import BarraStrumenti from './components/barraStrumenti/barraStrumenti';

function App() {
 const [accesso, setAccesso] = useState(1); // da settare a 0 e aggiungere logica per controllare se login già effettuato (localStorage)
  return (
    <>
    <BarraStrumenti setAccesso = {setAccesso}/>
    {
      accesso === 0 ? <Login setAccesso = {setAccesso}/> : <Home/>
    }  
    </>
  )
}

export default App
