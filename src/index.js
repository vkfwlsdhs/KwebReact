import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/app.js'
import counterApp from './reducers';

const store = createStore(counterApp);

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	, document.getElementById('root'));