import React from 'react'

const Note = ({text,setNotes,notes,note}) => {

  const remover = () => {
      console.log("remove")
      setNotes(notes.filter((el) =>el.id !== note.id))
  }

  return (
    <div className='Note'>
      <li className='bg-slate-500 mt-5 p-5 flex justify-between rounded-lg'>
        <h3>{text}</h3>
        <button className="btn hover:bg-red-700" onClick={remover}>Remove</button>
      </li>
    </div>
  )
}

export default Note