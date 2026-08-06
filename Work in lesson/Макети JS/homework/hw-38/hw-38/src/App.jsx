import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = "Стас";
  let imageUrl =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8Yq0Mx9h56x0qYqtpdJAA0bgpBp9zrgrk9tSTtE42A&s=10";
  let imageAlt = "Морська свинка";
  let favoriteSite = 
  {
    siteName: "Google",
    url: "https://www.google.com/",
  }

  let num1 = 15;
  let num2 = 27;
  let sum = num1 + num2;

  let colors = ["Чорний", "Фіолетовий", "Білий"];


  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src={imageUrl}
        alt={imageAlt}
        width="400"
      />

      <p>
        Мій улюблений сайт:{" "}
        <a
          href={favoriteSite.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {favoriteSite.siteName}
        </a>
      </p>

      <p>Сума чисел: {sum}</p>

      <h2>Кольори:</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </>
  )
}

export default App
