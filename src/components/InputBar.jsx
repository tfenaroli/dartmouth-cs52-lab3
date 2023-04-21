import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function InputBar({ handleCreate, isLoggedIn }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ABCAF8');
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <>
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
            setShowColorPicker(!showColorPicker);
          }}
          disabled={!isLoggedIn}
          className="btn btn-secondary"
          type="button"
        >
          Toggle Color Picker
        </button>
        <button
          onClick={() => {
            if (!(title && text)) {
              alert('Must enter a title and text for your note!');
            } else {
              handleCreate(title, text, color);
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
      {showColorPicker && (
      <div className="mt-4">
        <SketchPicker color={color}
          onChangeComplete={(newColor) => {
            console.log(newColor);
            setColor(newColor.hex);
          }}
        />
      </div>
      )}
    </>
  );
}
