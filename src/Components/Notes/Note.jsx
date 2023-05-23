import React from 'react'

const Note = ({text,setNotes,notes,note}) => {

  const removeNote = () => {
      console.log("remove")
      setNotes(notes.filter((el) => el.id !== note.id));
  }

  return (
    <div className='Note'>
      <li>
        <h3>{text}</h3>
        <button className="btn" onClick={removeNote}>Remove</button>
      </li>
    </div>
  )
}

export default Note