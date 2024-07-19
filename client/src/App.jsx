import { useState } from 'react'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="box">
        <Header/>

        <main id="main-content">



        </main>

      </div>
    </>
  )
}

export default App
