import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from 'remote/TestComponent';
import MicrofrontendApp from 'remote/MicrofrontendApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
    <div className="main-app">
      <h4>Main application</h4>
        <TestComponent></TestComponent>
    </div>
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
