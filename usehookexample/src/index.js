import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import MyComponent from './MyComponet';
import { Timer } from './timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyComponent/>
    <Timer/>
  </React.StrictMode>
);


