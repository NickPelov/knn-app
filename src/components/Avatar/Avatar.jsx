import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Avatar = (props) => {
	const { image, onClick, style, className, size, status } = props;
	function renderSize(type) {
		let styles = '';

		switch (size) {
			case 'S':
				styles = type === 'image' ? 'avatar-s' : 'avatar-status-s';
				break;
			case 'M':
				styles = type === 'image' ? 'avatar-m' : 'avatar-status-m';
				break;
			case 'L':
				styles = type === 'image' ? 'avatar-l' : 'avatar-status-l';
				break;
			case 'XL':
				styles = type === 'image' ? 'avatar-xl' : 'avatar-status-xl';
				break;
			case 'XXL':
				styles = type === 'image' ? 'avatar-xxl' : 'avatar-status-xxl';
				break;
			case 'XXXL':
				styles = type === 'image' ? 'avatar-xxxl' : 'avatar-status-xxxl';
				break;
			default:
				styles = type === 'image' ? 'avatar-xxl' : 'avatar-status-xxl';
				break;
		}

		return styles;
	}

	return (
		<div className={classNames('avatar-container', className)} onClick={onClick}>
			{image ? (
				<img src={image} className={classNames('avatar', renderSize('image'))} aria-hidden="true" style={style} />
			) : (
				<Icon icon={'icon-account_circle'} size={size ? size : 'XXL'} style={style} />
			)}

			<div className={classNames('avatar-status', renderSize(), `${status}`)} />
		</div>
	);
};

Avatar.propTypes = {
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.oneOf(['S', 'M', 'L', 'XL', 'XXL', 'XXXL']), PropTypes.number]),
	status: PropTypes.oneOf(['active', 'offline', 'away', 'busy']),
};
export default Avatar;
