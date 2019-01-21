import React from 'react';

export const AuthContext = React.createContext();

export class AuthContextComponent extends React.Component {
	static contextType = AuthContext;
	state = {
		user: null,
		token: null,
	};

	loadUserObject = (user) => {
		this.setState(user);
	};

	loadToken = (token) => {
		localStorage.setItem('_t', token);
	};

	render() {
		const { children } = this.props;

		console.log('user: ', this.state);

		const newContext = { ...this.state, loadUserObject: this.loadUserObject, loadToken: this.loadToken };

		return <AuthContext.Provider value={newContext}>{children}</AuthContext.Provider>;
	}
}
