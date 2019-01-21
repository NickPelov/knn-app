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
			<Avatar
				image={
					'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg'
				}
				size={'L'}
				status={'active'}
			/>
			<span className={classNames('user-information')}>{user.firstName}</span>
			<span className={classNames('user-information')}>{user.lastName}</span>
		</div>
	);
};

export default withRouter(User);
