import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConfiteriaProvider} from './components/context';

ReactDOM.render(
    <ConfiteriaProvider>
    <Router>
        <App />
    </Router>
    </ConfiteriaProvider>
, 
document.getElementById('root'));

