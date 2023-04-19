import React, { useState } from 'react';

export default function SearchBar({ handleCreate }) {
  const [text, setText] = useState('');
  return (
    <div className="input-group w-50 mx-auto">
      <input type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
        value={text}
        className="form-control"
        aria-describedby="button-addon2"
      />
      <button onClick={() => { handleCreate('test', text); }} className="btn btn-primary" type="button">Submit</button>
    </div>
  );
}
