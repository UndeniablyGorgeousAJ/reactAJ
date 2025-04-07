import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello from React</h1>;

const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<App />);
