import Button from '@mui/material/Button';
import './App.css';
import React from 'react';

//1. import react-dom maybe?? -> not working
//2. export the App.js from microfrontend not only specific component

function testComponent() {
  return (
    <div>
        <Button variant="text">Shared component</Button>
    </div>
  );
}

export default testComponent;