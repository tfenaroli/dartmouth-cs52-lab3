import React, { useState } from 'react';

export default function InputBar({ handleCreate, isLoggedIn }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  return (
    <div className="input-group w-50">
      <input
        disabled={!isLoggedIn}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="form-control"
        placeholder="Title"
      />
      <input
        disabled={!isLoggedIn}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="form-control"
        placeholder="Content"
      />
      <button
        onClick={() => {
          if (!(title && text)) {
            alert('Must enter a title and text for your note!');
          } else {
            handleCreate(title, text);
            setTitle('');
            setText('');
          }
        }}
        disabled={!isLoggedIn}
        className="btn btn-primary"
        type="button"
      >
        Create
      </button>
    </div>
  );
}
