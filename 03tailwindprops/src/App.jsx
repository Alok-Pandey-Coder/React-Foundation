import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-1.5'>Tailwind test</h1>
      <Card className='mb-2.5' h2text={"ChaiCode"} paraText={"welcom to the world of chai and code  happy to onBoard you"} />

      <Card h2text={"React series"} paraText={"hxjs hbmncxh knxi hn,mcuhfsdkj"}/>
    </>
  )
}

export default App
