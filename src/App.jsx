import { useState } from 'react'
import './App.css'
import Login from './components/login/login'

function App() {
 const [accesso, setAccesso] = useState(0);
  return (
    <>
    {
      accesso === 0 ? <Login setAccesso = {setAccesso}/> : <span>accesso eseguito</span>
    }  
    </>
  )
}

export default App
