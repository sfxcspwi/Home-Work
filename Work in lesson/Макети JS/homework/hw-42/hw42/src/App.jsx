import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import StickerList from "./components/StickerList"
import Choice from "./components/Choice"
import './App.css'


function App() {
  const [selectedSticker, setSelectedSticker] = useState("")

  return (
    <>
      <Choice selectedSticker={selectedSticker} />

      <StickerList onStickerClick={setSelectedSticker} />
      
    </>
  )
}



export default App
