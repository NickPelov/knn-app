import React from 'react';
import { MemoryRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './Menu';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
	<Router>
		<div>
			<Menu />
			<Route path="/" exact component={Index} />
			<Route path="/about/" component={About} />
			<Route path="/users/" component={Users} />
		</div>
	</Router>
);

export default AppRouter;
