import React, { useState, useEffect } from 'react';
import Note from './Note';
import InputBar from './InputBar';
import * as db from '../services/datastore';

export default function App() {
  const [notes, setNotes] = useState({
    0: {
      title: 'loading note',
      text: '![](http://i.giphy.com/gyRWkLSQVqlPi.gif)',
      x: 900,
      y: 200,
      zIndex: 10,
    },
  });

  const handleDelete = (id) => {
    console.log(`deleting note with id: ${id}`);
    db.deleteNote(id);
  };

  const handleCreate = (title, text) => {
    console.log(`creating note with text: ${text}`);
    db.createNote({
      title: 'Title',
      text,
      x: 0,
      y: 0,
      zIndex: 1,
    });
  };

  const handleEdit = (id, updatedFields) => {
    console.log(`editing note with id: ${id}`);
    db.updateNote(id, updatedFields);
  };

  useEffect(() => {
    console.log('mounted!');
    db.fetchNotes((newNotes) => {
      console.log('data update!');
      setNotes(newNotes);
    });
  }, []);

  return (
    <div className="appWrapper">
      <h1 className="my-4 py-3 text-center">Notes App!</h1>
      <InputBar handleCreate={handleCreate} />
      <div className="notesWrapper">
        {notes && Object.entries(notes).map(([id, note]) => {
          return (
            <Note key={id} id={id} title={note.title} text={note.text} x={note.x} y={note.y} handleDelete={handleDelete} handleEdit={handleEdit} />
          );
        })}
      </div>
    </div>
  );
}
