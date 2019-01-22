import React from 'react';
import classNames from 'classnames';
import Avatar from '../../components/Avatar/Avatar';
import { withRouter } from 'react-router';

const User = (props) => {
	const { user, match, history } = props;

	function onClick() {
		const { params } = match;

		history.push(`/messages/${user.id}`);
	}

	return (
		<div className={'user-container'} onClick={onClick}>
			<Avatar image={user.avatar} size={'L'} status={'active'} />
			<span className={classNames('user-information')}>{user.firstName}</span>
			<span className={classNames('user-information')}>{user.lastName}</span>
		</div>
	);
};

export default withRouter(User);
