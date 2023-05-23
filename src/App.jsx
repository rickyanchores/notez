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
      <div className='App bg-slate-600 p-20 font-bold'>
        <h3>Notes v3</h3>
        <p>Vite + Tailwindcss + Scss</p>
        <Form input={input} setInput={setInput} notes={notes} setNotes={setNotes}/>
        <Notes notes={notes} setNotes={setNotes}/>
      </div>
      <h3 className="bg-slate-800">Developed by Ricky A</h3>
    </>
  )
}

export default App
