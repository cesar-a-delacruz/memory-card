import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      	
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
