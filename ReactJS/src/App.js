import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/login';
import User from './component/user';

class App extends Component {

	render() {
		return (
			<Router>
				<div className="app" >
					<Route path="/" component={Login}/>
					<Route path="/user" component={User}/>
				</div>
			</Router>
		);
	}
}

export default App;
