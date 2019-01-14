import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Switch extends PureComponent {
	static propTypes = {
		onChange: PropTypes.func,
		disabled: PropTypes.string,
		initialIsChecked: PropTypes.bool,
	};

	constructor(props) {
		super(props);
		this.state = {
			checked: props.initialIsChecked,
		};
	}

	onClick = () => {
		const { checked } = this.state;
		const { onChange, disabled } = this.props;
		if (disabled) return;
		this.setState({ checked: !checked });
		if (onChange) onChange(checked);
	};

	render() {
		const { checked } = this.state;
		const { disabled } = this.props;

		return (
			<span>
				<div className={classNames('switch')} onClick={this.onClick}>
					<div className={classNames('switch-track', { checked: checked, disabled: disabled })} />
					<div className={classNames('switch-ripple')}>
						<div className={classNames('switch-thumb', { checked: checked, disabled: disabled })} />
					</div>
				</div>
			</span>
		);
	}
}
