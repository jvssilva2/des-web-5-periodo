import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState('João')
  const [frutas, setFrutas] = useState('Laranja' , 'Maçã', 'Banana', 'Uva', 'Abacaxi')

  return (
    <>
    <h1>Contador - {nome}</h1>
    <div>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <span>{count}</span>
      count is {count}
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
    </>

  )
}                             
export default App;
