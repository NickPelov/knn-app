import React from 'react';
import { MemoryRouter as Router, Route, Redirect, Switch } from 'react-router';
import SignIn from './Auth/SignIn';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';
import SelectUser from './AuthSelectUser/SelectUser';
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
	<Router>
		<div className={'app-container'}>
			<Menu />
			<Switch>
				<Route path="/home" exact component={Settings} />
				<Route path="/messages" exact component={Users} />
				<Route path="/calendar" component={SignIn} />
				<Route path="/tasks" component={SelectUser} />
				<Route path="/settings" component={Settings} />
				<Redirect to="/home" />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
