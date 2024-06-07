import { useState } from 'react'
import './App.css'
import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <h2>Hola</h2>
      <Footer/>
    </>
  )
}

export default App
