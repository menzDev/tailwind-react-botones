import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const alertaUno = () =>{
    alert("Tocastes el boton 1")
  }
  const alertaDos = () =>{
    alert("Tocastes el boton 2")
  }
  const alertaTres = () =>{
    alert("Tocastes el boton 3")
  }
  return (
    <>
    <div className='flex justify-center items-center flex-row gap-4 '>
      <button onClick={alertaUno} className='w-[79px] h-[46px] bg-blue-600 border border-none hover:bg-blue-700  disabled:opacity-50 disabled:pointer-events-none'> boton</button>
      <button onClick={alertaDos} className='w-[79px] h-[46px] bg-red-500 border rounded-none border-none hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none' >boton</button>
      <button onClick={alertaTres} className='w-[300px] h-[46px] border-none bg-yellow-500 hover:bg-yellow-600' >boton</button>
    </div>
   
    </>
  )
}

export default App
