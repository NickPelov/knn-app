import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

export default class Button extends React.Component {
	static defaultProps = {
		type: 'button',
		buttonType: 'primary',
	};

	static propTypes = {
		label: PropTypes.string,
		className: PropTypes.string,
		type: PropTypes.string.isRequired,
		buttonType: PropTypes.oneOf(['primary', 'accept', 'decline', 'reset', 'login']),
		style: PropTypes.any,
		onClick: PropTypes.func,
		icon: PropTypes.string,
		disabled: PropTypes.bool,
		filled: PropTypes.bool,
		borderless: PropTypes.bool,
	};

	render() {
		const { type, buttonType, disabled, filled, label, className, onClick, icon, borderless, style } = this.props;

		return (
			<button
				style={style}
				className={classNames('button', className, buttonType, {
					disabled: disabled,
					filled: filled && !disabled && !borderless,
					borderless: borderless && !filled && !disabled,
					icononly: icon && !label,
				})}
				type={type}
				onClick={!disabled ? onClick : undefined}>
				<div>
					{label} {icon ? <Icon icon={icon} /> : undefined}
				</div>
			</button>
		);
	}
}