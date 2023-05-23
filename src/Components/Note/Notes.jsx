import React from 'react'
import Note from '../Notes/Note'

const Notes = ({text,setNotes,notes}) => {
  return (
    <div className='Notes'>
      <ul>
        {notes.map((note) => (
          <Note text={note.text} id={note.id} setNotes={setNotes} note={note}/>
        ))}
      </ul>
    </div>
  )
}

export default Notes