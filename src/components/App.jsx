import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import InputBar from './InputBar';
import * as db from '../services/datastore';
import LogIn from './LogIn';
import NotePad from './NotePad';

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

  const [userEmail, setUserEmail] = useState('');

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
    db.updateNote(id, updatedFields);
  };

  useEffect(() => {
    console.log('mounted!');

    console.log('mounting auth listener');
    onAuthStateChanged(db.auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    console.log('mounting notes listener');
    db.fetchNotes((newNotes) => {
      console.log('data update!');
      setNotes(newNotes);
    });
  }, []);

  return (
    <div className="h-100 d-flex flex-column">
      <div className="border border-primary d-flex flex-column align-items-center">
        <h1 className="fs-3 my-4">React Notes! {userEmail && `(${userEmail})`}</h1>
        <InputBar handleCreate={handleCreate} isLoggedIn={userEmail} />
        {userEmail && (
        <button
          className="btn btn-primary my-4"
          type="button"
          onClick={() => {
            console.log('signing out');
            signOut(db.auth);
          }}
        >
          Sign Out
        </button>
        )}
      </div>
      {userEmail ? (
        <NotePad notes={notes} handleDelete={handleDelete} handleEdit={handleEdit} />
      ) : (
        <LogIn />
      )}
    </div>
  );
}
