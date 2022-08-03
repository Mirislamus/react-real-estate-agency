import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import BodyWrapper from './wrappers/BodyWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BodyWrapper />
  </React.StrictMode>
);

reportWebVitals();
