import React from 'react';
import Auth from '../Auth/Auth';
import Card from '../../components/Card/Card';
import UserList from './UserList';

export default class SelectUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	onChange = (type, value) => {
		const state = {};
		state[type] = value;

		this.setState(state);
	};

	render() {
		return (
			<Auth title={'Select User'}>
				<Card className={'auth-card-select-user'}>
					<UserList />
				</Card>
			</Auth>
		);
	}
}
