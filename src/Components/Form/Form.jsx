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
    <div className='Form'>
        <input value={input} className='input font-bold' input="/" type="text" placeholder='Write here' onChange={inputChange}/>
        <button className="btn ml-5" onClick={addNote} >+</button>
    </div>
  )
}

export default Form