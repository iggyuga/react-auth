import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import reducers from './reducers';


ReactDOM.render(
	<Provider store={createStore(reducers, {})}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" component={Signup} />
				<Route path="/signout" />
				<Route path="/signin" />
				<Route path="/feature" />
			</App>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);

// ReactDOM.render(
// <
// <App />
// , document.querySelector('#root'));