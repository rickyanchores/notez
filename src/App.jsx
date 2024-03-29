import { useState } from 'react'

import './App.css'
import Form from "./Components/Form/Form";
import Notes from './Components/Notes/Notes';


function App() {
  const [count, setCount] = useState(0)


  const [input,setInput] = useState("")
  const [notes,setNotes] = useState([])

  return (
    <>
      <div className='App p-20 font-bold rounded-lg m-auto'>
        <h1 className="title text-orange-700 hover:animate-pulse text-lg-200">NOTEZ</h1>
        <p>Vite + Tailwindcss + Scss</p>
        <Form input={input} setInput={setInput} notes={notes} setNotes={setNotes}/>
        <Notes notes={notes} setNotes={setNotes}/>
      </div>
      <h3 className="footer">Developed by Ricky A</h3>
    </>
  )
}

export default App
