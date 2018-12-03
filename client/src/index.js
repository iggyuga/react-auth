import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route  } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';


ReactDOM.render(
	<BrowserRouter>
	  <App>
		<Route path="/" exact component={Welcome} />
		<Route path="/signup" component={Signup} />
		<Route path="/signout" />
		<Route path="/signin" />
		<Route path="/feature" />
	  </App>
	</BrowserRouter>
	, document.getElementById('root')
);

// ReactDOM.render(
// <
// <App />
// , document.querySelector('#root'));