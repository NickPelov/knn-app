import React from 'react';
import classNames from 'classnames';
import Avatar from '../../components/Avatar/Avatar';
// const Auth = React.lazy(() => import('./Auth'));

export default class UserListItem extends React.Component {
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
		const { title, subtitle, avatar, className } = this.props;
		return (
			<div className={classNames('auth-list-item', className)}>
				<Avatar image={avatar} className={'auth-list-item-avatar'} />
				<div className={'auth-list-item-container'}>
					<div className={'auth-list-item-title'}>{title}</div>
					<div className={'auth-list-item-subtitle'}>{subtitle}</div>
				</div>
			</div>
		);
	}
}
