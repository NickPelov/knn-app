import React from 'react';
import AppRouter from './views/Router';
import AuthRouter from './views/Auth/AuthRouter';
import { MenuContext, MenuContextComponent } from './contexts/MenuContext';
export default class App extends React.Component {
	static contextType = MenuContext;
	state = {
		loggedIn: true,
	};

	render() {
		const { loggedIn } = this.state;
		return <MenuContextComponent>{loggedIn ? <AppRouter /> : <AuthRouter />}</MenuContextComponent>;
	}
}
