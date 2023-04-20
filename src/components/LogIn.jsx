import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import * as db from '../services/datastore';

export default function LogIn() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const register = () => {
    createUserWithEmailAndPassword(db.auth, email, password)
      .then((userCredential) => {
        console.log('successfully registered');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error registering: ${errorMessage}`);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(db.auth, email, password)
      .then((userCredential) => {
        console.log('successfully signed in');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error signing in: ${errorMessage}`);
      });
  };

  return (
    <div>
      <p>Log in!</p>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className="form-control"
        aria-describedby="button-addon2"
      />
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        className="form-control"
        aria-describedby="button-addon2"
      />
      <button type="button" onClick={register}>sign in</button>
    </div>
  );
}
