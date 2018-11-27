import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import './Button.scss';

export default class Button extends React.Component {
	static defaultProps = {
		type: 'button',
		buttonType: 'primary',
		filled: true,
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
					filled: filled && !disabled,
					borderless: borderless,
					icononly: icon && !label,
				})}
				type={type}
				onClick={!disabled ? onClick : undefined}>
				<div className="">
					{label} {icon ? <Icon icon={icon} /> : undefined}
				</div>
			</button>
		);
	}
}
