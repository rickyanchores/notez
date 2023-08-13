import React from 'react'

const Form = ({input,setInput,notes,setNotes}) => {

    //EVENTS
    const inputChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const addNote = (e) => {
        e.preventDefault(e);
        setNotes([...notes,{ text: input, id: Math.random() * 1000}])
        setInput("")
    }

  return (
    <form className='Form'>
        <input value={input} className='input font-bold p-5 mt-5' input="/" type="text" placeholder='Type notes' onChange={inputChange}/>
        <button className="btn ml-5 animate-pulse" onClick={addNote} >+</button>
    </form>
  )
}

export default Form