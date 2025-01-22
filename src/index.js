import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './App.scss'
import Home from './pages';

ReactDOM.render(
<React.StrictMode>
	<App />
	<Home />
</React.StrictMode>,
document.getElementById('root')
);
