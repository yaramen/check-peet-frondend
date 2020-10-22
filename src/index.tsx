import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {CartProvider} from './components/Cart/CartContext';

ReactDOM.render(
    <React.StrictMode>
        <CartProvider>
            <Router>
                <App/>
            </Router>
        </CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
);