import React from 'react';
import { createRoot } from 'react-dom/client'; // Corect importul
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from '../src/components/App';

// Selectează elementul root din DOM
const container = document.getElementById('root');

// Creează root-ul folosind `createRoot`
const root = createRoot(container);

// Folosește `root.render` pentru a renderiza aplicația
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
