import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, child, onValue, push, update, remove,
} from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCt4sLEttd7Vj3nNCdG1Z3HQ8GqWTAFPCs',
  authDomain: 'firenotes-c3f10.firebaseapp.com',
  databaseURL: 'https://firenotes-c3f10-default-rtdb.firebaseio.com',
  projectId: 'firenotes-c3f10',
  storageBucket: 'firenotes-c3f10.appspot.com',
  messagingSenderId: '581611567988',
  appId: '1:581611567988:web:4e5609e90b7b40f0e24a21',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export function fetchNotes(updateNotes) {
  onValue(ref(database, 'notes'), (snapshot) => {
    const data = snapshot.val();
    updateNotes(data);
  });
}

export function createNote(fields) {
  push(child(ref(database), 'notes'), fields);
}

export function updateNote(id, updatedFields) {
  update(child(child(ref(database), 'notes'), id), updatedFields);
}

export function deleteNote(id) {
  remove(child(child(ref(database), 'notes'), id));
}
