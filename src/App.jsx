import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/main.jsx'
import Card from './components/Card.jsx'
function App() {

const [count, setCount] = useState(0);

  return (
    <>
    <Navbar count={count} setCount ={setCount} />
    <Main/>
    <Card count={count}/>
    </>
  )
}

export default App
