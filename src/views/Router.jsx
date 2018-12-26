import React from 'react';
import { MemoryRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import Home from './Home/Home';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
	<Router>
		<div>
			<Route path="/" exact component={Home} />
			<Route path="/signin" exact component={SignIn} />
			<Route path="/about/" component={About} />
			<Route path="/users/" component={Users} />
		</div>
	</Router>
);

export default AppRouter;
