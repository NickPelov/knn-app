import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router';
import SignIn from './Auth/SignIn';
import Home from './Home/Home';
import Menu from './Menu/Menu';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
	<Router>
		<div className={'app-container'}>
			<Menu />
			<Route path="/home" exact component={Home} />
			<Route path="/messages" exact component={SignIn} />
			<Route path="/calendar" component={About} />
			<Route path="/tasks" component={Users} />
			<Route path="/settings" component={Users} />
		</div>
	</Router>
);

export default AppRouter;
