import React from 'react';
import classNames from 'classnames';
import Icon from '../../components/Icon/Icon';

const Message = (props) => {
	const { body, isReceived } = props;
	const library = ['Something'];
	function parseMessage() {
		for (let string of library) {
			if (body.indexOf(string) > -1) {
				console.log('here');
				return true;
			}
		}
		forceUpdate();
	}

	return (
		<div className={classNames('message-container', { received: isReceived })}>
			<span className={classNames('message-body', { received: isReceived })}>{body}</span>
			{parseMessage() === true ? (
				<Icon icon={'icon-notifications_active'} size={'S'} className={'message-notification'} />
			) : (
				undefined
			)}
		</div>
	);
};

export default Message;
