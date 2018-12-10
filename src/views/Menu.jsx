import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Badge from '../components/Badge/Badge';
import Card from '../components/Card/Card';
import Icon from '../components/Icon/Icon';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}

	increment = () => {
		let { counter } = this.state;
		this.setState({ counter: counter + 110 });
	};

	render() {
		const { counter } = this.state;
		return (
			<Card>
				<Link to="/" onClick={this.increment}>
					{' '}
					Home {counter}
				</Link>
				<Link to="/about/">
					<Badge value={3}>About</Badge>
				</Link>
				<Link to="/users/">
					<Badge value={1} style={{ backgroundColor: 'red' }}>
						<Button label={'button'} filled />
					</Badge>
				</Link>
				<Link to="/about/">
					<Icon icon={'icon-facebook'} />
					About
				</Link>
			</Card>
		);
	}
}
