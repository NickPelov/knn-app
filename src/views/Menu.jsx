import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { counter: 0 };
	}

	increment = () => {
		let { counter } = this.state;
		this.setState({ counter: counter + 110 });
	};

	render() {
		const { counter } = this.state;
		return (
			<div>
				<li onClick={this.increment}>
					<Link to="/">
						<h1>Home</h1>
						<h2>Home</h2>
						<h3>Home</h3>
						<h4>Home</h4>
						<h5>Home</h5>
						<h6>Home</h6>
						{counter}
					</Link>
				</li>
				<li>
					<Link to="/about/">About</Link>
				</li>
				<li>
					<Link to="/users/">Users</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</div>
		);
	}
}
