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
						{' '}
						Hosmessss {counter} <Button filled={true} label={'Increment'} />
					</Link>
				</li>
				<li>
					<Link to="/about/">About</Link>
				</li>
				<li>
					<Link to="/users/">Users</Link>
				</li>
			</div>
		);
	}
}
