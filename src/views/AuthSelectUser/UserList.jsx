import React from 'react';
import UserListItem from './UserListItem';
import Divider from '../../components/Divider/Divider';
// const Auth = React.lazy(() => import('./Auth'));

export default class UserList extends React.Component {
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
		// const { accounts } = this.props;
		const accounts = [
			{ id: 1, name: 'Nikolay Pelov', lastLogin: '17.01.2019' },
			{ id: 2, name: 'Mihail Verov', lastLogin: '17.01.2019' },
			{ id: 3, name: 'Jurgen van den Berg', lastLogin: '17.01.2019' },
			{ id: 4, name: 'Hein Ruthjes', lastLogin: '17.01.2019' },
			{ id: 5, name: 'Nikolay Pelov', lastLogin: '17.01.2019' },
		];
		return (
			<div className={'auth-user-list-container'}>
				{accounts.map((account) => (
					<div>
						<UserListItem key={account.id} title={account.name} subtitle={account.lastLogin} />
					</div>
				))}
			</div>
		);
	}
}
