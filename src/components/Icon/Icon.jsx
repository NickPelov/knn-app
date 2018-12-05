import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Icon = (props) => {
	const { icon, onClick, style, className } = props;
	function renderSize() {
		const { size } = props;
		let styles = '';

		switch (size) {
			case 'S':
				styles = 'icon-lg';
				break;
			case 'M':
				styles = 'icon-2x';
				break;
			case 'L':
				styles = 'icon-3x';
				break;
			case 'XL':
				styles = 'icon-4x';
				break;
			case 'XXL':
				styles = 'icon-5x';
				break;
			default:
				break;
		}

		return styles;
	}

	return <div className={classNames('icon', icon, renderSize(), className)} aria-hidden="true" onClick={onClick} style={style} />;
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	size: PropTypes.oneOfType([PropTypes.oneOf(['S', 'M', 'L', 'XL', 'XXL']), PropTypes.number]),
};
export default Icon;
