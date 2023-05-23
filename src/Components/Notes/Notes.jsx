import React from 'react'
import Note from '../Note/Note'

const Notes = ({text,setNotes,notes,note}) => {
  return (
    <div className='Notes'>
      <ul>
        {notes.map((note) => (
          <Note text={note.text} id={note.id} setNotes={setNotes} notes={notes} note={note}/>
        ))}
      </ul>
    </div>
  )
}

export default Notes