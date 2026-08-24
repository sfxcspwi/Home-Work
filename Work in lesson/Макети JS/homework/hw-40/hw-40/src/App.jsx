import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Profile from "./components/Profile";
import Statistics from './components/Statistics';
import Friendlist from './components/Friendlist';
import TransactionHistory from "./components/TransactionHistory";
import user from "./user.json";
import transactions from "./transactions.json";
import data from "./data.json";
import friends from "./friends.json";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />;

      <Friendlist friends={friends}/>

      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
