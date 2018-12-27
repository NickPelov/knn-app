import React from 'react';
import AppRouter from './views/Router';
import AuthRouter from './views/Auth/AuthRouter';
export default class App extends React.Component {
	state = {
		loggedIn: true,
	};
	render() {
		const { loggedIn } = this.state;
		return loggedIn ? <AppRouter /> : <AuthRouter />;
	}
}
