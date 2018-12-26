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
				styles = 'icon-s';
				break;
			case 'M':
				styles = 'icon-m';
				break;
			case 'L':
				styles = 'icon-l';
				break;
			case 'XL':
				styles = 'icon-xl';
				break;
			case 'XXL':
				styles = 'icon-xxl';
				break;
			case 'XXXL':
				styles = 'icon-xxl';
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
