import './App.css';
import React from 'react';
import TestComponent from './testComponent.js';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root-mf'));

const App = () => (
  <div className="mf-1">
    <h4>Microfrontend App</h4>
    <TestComponent></TestComponent>
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

