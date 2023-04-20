import React from 'react';
import Note from './Note';

export default function NotePad({ notes, handleDelete, handleEdit }) {
  return (
    <div className="notesWrapper position-relative">
      {notes && Object.entries(notes).map(([id, note]) => {
        return (
          <Note key={id} id={id} title={note.title} text={note.text} x={note.x} y={note.y} handleDelete={handleDelete} handleEdit={handleEdit} />
        );
      })}
    </div>
  );
}
