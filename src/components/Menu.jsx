import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { counter: 0 };
	}

	increment = () => {
		let { counter } = this.state;
		this.setState({ counter: counter + 1 });
	};

	render() {
		const { counter } = this.state;
		return (
			<div>
				<li onClick={this.increment}>
					<Link to="/">Home{counter}</Link>
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
