import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Greeting from './Greeting';
import Message from './Message';
import Button from './Button';

function App() 
{
  const handleClick = () => {
    console.log('Кнопку натиснуто!');
  };

  return (
    <div>
      <Greeting name="Стас" />
      <Message text="Привіт" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;