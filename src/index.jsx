import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
// import { enableAllPlugins } from 'immer';
import App from './components/App';

// enableAllPlugins();

const root = createRoot(document.getElementById('main'));
root.render(<App />);
