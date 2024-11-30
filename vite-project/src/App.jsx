import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sliders from './box/slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sliders/>
    </>
  )
}

export default App
