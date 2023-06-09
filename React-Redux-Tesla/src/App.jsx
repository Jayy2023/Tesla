import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
     <div className="App">
      <Header />
      <Home  />
     </div>
    </>
  )
}

export default App
