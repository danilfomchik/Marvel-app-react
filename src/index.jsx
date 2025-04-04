import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/App';
import './style/style.scss';

createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>,
);
