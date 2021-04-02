import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@material-ui/core';

ReactDOM.render(
    <Box fixed>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>,
        </Box>,
  document.getElementById('root')
);
