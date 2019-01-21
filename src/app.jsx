import React from 'react';
import AppRouter from './views/Router';
import AuthRouter from './views/Auth/AuthRouter';
import { MenuContextComponent } from './contexts/MenuContext';
import { AuthContextComponent } from './contexts/AuthContext';
export default class App extends React.Component {
	state = {
		loggedIn: true,
	};

	render() {
		const { loggedIn } = this.state;
		return (
			<AuthContextComponent>
				<MenuContextComponent>{loggedIn ? <AppRouter /> : <AuthRouter />}</MenuContextComponent>
			</AuthContextComponent>
		);
	}
}
