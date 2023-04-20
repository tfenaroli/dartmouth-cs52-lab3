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
        const errorMessage = error.message;
        console.log(`error registering: ${errorMessage}`);
        alert(errorMessage);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(db.auth, email, password)
      .then((userCredential) => {
        console.log('successfully signed in');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(`error signing in: ${errorMessage}`);
        alert(errorMessage);
      });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className="form-control w-25 mt-5"
        placeholder="Username"
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        className="form-control w-25 mt-3"
        placeholder="Password"
      />
      <button type="button" className="btn btn-primary mt-4" onClick={signIn}>Sign In</button>
      <button type="button" className="btn btn-outline-primary mt-4" onClick={register}>Register</button>
    </div>
  );
}
