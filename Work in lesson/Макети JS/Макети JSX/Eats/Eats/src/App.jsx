import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import OurApp from "./components/OurApp"
import Order from "./components/Order"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header/>
      </header>
      
      <main>
        <Hero/>
        <OurApp/>
        <Order/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
