import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

const Notification = (props) => {
	const { title, text, isVisible, className, onClick, style } = props;

	return (
		<div className={classNames('notification-container', { show: isVisible }, className)} onClick={onClick}>
			<div className={'notification-info-container'}>
				<span className={'notification-title'}>{title}</span>
				<span className={'notification-text'}>{text}</span>
			</div>
			<Icon icon={'icon-check_circle'} size={'L'} className={'notification-icon'} />
		</div>
	);
};
export default Notification;
