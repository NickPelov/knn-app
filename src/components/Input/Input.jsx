import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

export default class Input extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		textStyles: PropTypes.string,
		type: PropTypes.string,
		prefix: PropTypes.string,
		suffix: PropTypes.string, // TODO: Fix suffix implementation
		placeholder: PropTypes.string,
		defaultValue: PropTypes.string,
		value: PropTypes.string,
		autoFocus: PropTypes.bool,
		onChange: PropTypes.func,
		onClick: PropTypes.func,
		onEnterClick: PropTypes.func,
		onValidate: PropTypes.func,
		clearable: PropTypes.bool,
		disabled: PropTypes.bool,
		style: PropTypes.object,
		isTextarea: PropTypes.bool,
		large: PropTypes.bool,
		helperText: PropTypes.string,
		label: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			focused: false,
			value: undefined,
			error: undefined,
		};
		this.input = React.createRef();
	}

	getValue() {
		return this.state.value !== undefined ? this.state.value : this.props.value || this.props.defaultValue;
	}

	onClear = () => {
		const { disabled, onChange } = this.props;

		if (disabled) return;

		const value = this.getValue();

		if (!value) return;

		this.setState({
			value: '',
		});

		if (onChange) {
			onChange({
				value: '',
			});
		}
	};

	onChange = (event) => {
		const { disabled, onChange } = this.props;
		const { value } = event.target;

		if (disabled) return;

		if (value.length > 600) return;

		const error = this.onValidate(value);

		this.setState({
			value,
			error,
		});

		if (!error && onChange) {
			onChange({
				value,
			});
		}
	};

	onEnter = (event) => {
		const code = event.which || event.keyCode;

		if (code === 13) {
			this.props.onEnterClick();
		}
	};

	onFocus = () => {
		const { disabled } = this.props;

		if (disabled) return;

		this.input.current.focus();

		this.setState({
			focused: true,
		});
	};

	onBlur = () => {
		const { disabled, value } = this.props;

		if (disabled) return;

		this.setState({
			focused: false,
			value: this.state.value === undefined || this.state.value === '' ? value : this.state.value,
		});
	};

	onValidate = (value) => {
		if (!this.props.onValidate) return;
		const error = this.props.onValidate(value);

		return error;
	};

	renderHelperMessage() {
		const { helperText } = this.props;
		const { error } = this.state;

		if (!error) return helperText;

		if (error instanceof Error) {
			return error.message;
		} else if (typeof error === 'string') {
			return error;
		}
	}

	render() {
		const {
			className,
			textStyles,
			type,
			placeholder,
			defaultValue,
			autoFocus,
			disabled,
			style,
			isTextarea,
			prefix,
			suffix,
			onClick,
			onEnterClick,
			clearable,
			label,
		} = this.props;
		const { error, focused } = this.state;
		const value = this.getValue();

		return (
			<div id={`input-${label}`} tabIndex="-1" onFocus={this.onFocus} className={classNames('input', className)} style={style}>
				<div
					className={classNames(
						'input-container',
						{
							focused: focused && !disabled,
							error: error && !disabled,
							disabled: disabled,
						},
						className
					)}
					style={style}>
					{label ? (
						<label htmlFor={`input-${label}`} className={classNames('input-label', { focused: focused || value })}>
							{label}
						</label>
					) : (
						undefined
					)}
					{!isTextarea ? (
						<Fragment>
							{prefix ? <span className={classNames('input-prefix')}>{prefix}</span> : undefined}
							<input
								className={classNames('input-field', { textStyles: typeof textStyles === 'string', suffixed: suffix })}
								ref={this.input}
								type={type}
								placeholder={focused ? placeholder : undefined}
								defaultValue={defaultValue}
								value={value || ''}
								autoFocus={autoFocus}
								readOnly={disabled}
								onFocus={this.onFocus}
								onBlur={this.onBlur}
								onChange={this.onChange}
								onClick={onClick}
								style={style}
								onKeyDown={onEnterClick ? this.onEnter : undefined}
							/>
							{suffix ? <span className={classNames('input-suffix')}>{suffix}</span> : undefined}
						</Fragment>
					) : (
						<textarea
							className={classNames('input-textarea', { textStyles: typeof textStyles === 'string' })}
							ref={this.input}
							type={type}
							placeholder={focused ? undefined : placeholder}
							defaultValue={defaultValue}
							value={value || ''}
							autoFocus={autoFocus}
							readOnly={disabled}
							onFocus={this.onFocus}
							onBlur={this.onBlur}
							onChange={this.onChange}
							onClick={onClick}
							style={style}
							onKeyDown={onEnterClick ? this.onEnter : undefined}
						/>
					)}

					{clearable ? (
						error ? (
							<Icon icon={'icon-error'} size={'S'} className={classNames('input-icon')} />
						) : (
							<Icon icon={'icon-close'} onClick={this.onClear} size={'S'} className={classNames('input-icon')} />
						)
					) : (
						undefined
					)}
				</div>

				<span className={classNames('input-helper', { error: error, disabled: disabled })}>{this.renderHelperMessage()}</span>
			</div>
		);
	}
}
