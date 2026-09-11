import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Recipes from "./components/Recipes"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Recipes></Recipes>
    </>
  )
}

export default App
