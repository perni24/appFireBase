import { useState } from 'react'
import './home.css'

function Home() {
  const [scelta, setScelta] = useState(0)
  return (
    <>
        <div id='containerHome'>
            <div className='sceltaMenu'>
                <span>scelta1</span>
            </div>
            <div className='sceltaMenu'>
                <span>scelta2</span>
            </div>
            <div className='sceltaMenu'>
                <span>scelta3</span>
            </div>
        </div>
    </>
  )
}

export default Home
