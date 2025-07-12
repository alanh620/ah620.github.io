import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './App.scss'
import Home from './pages';
import Test from '../src/pages/test';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<React.StrictMode>
	<BrowserRouter basename="/ah620.github.io">
	<App />
	<Home />
	</BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);
