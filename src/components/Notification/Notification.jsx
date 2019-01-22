import React from 'react';
import classNames from 'classnames';

const Notification = (props) => {
	const { title, text, isVisible, className, onClick, style } = props;

	return (
		<div className={classNames('notification-container', { show: isVisible }, className)} onClick={onClick}>
			<span className={'notification-title'}>{title}</span>
			<span className={'notification-text'}>{text}</span>
		</div>
	);
};
export default Notification;
