import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './App.scss'
import Home from './pages';
import Test from '../src/pages/test';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
<React.StrictMode>
	<HashRouter>
	<App />
	<Home />
	</HashRouter>
</React.StrictMode>,
document.getElementById('root')
);
