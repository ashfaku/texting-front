import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Login from './login.jsx';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<Login value = {root} />);
