import React, { Component } from 'react';
import classNames from 'classnames';

class Checkbox extends Component {
	state = {
		selected: false,
	};

	componentDidMount() {
		if (this.props.selected) this.setState({ selected: this.props.selected });
	}

	componentDidUpdate(prevProps) {
		if (this.props.selected !== prevProps.selected) this.setState({ selected: this.props.selected });
	}

	onClick = (e) => {
		if (this.props.disabled) return;
		this.setState({ selected: !this.state.selected });

		if (this.props.onClick) this.props.onClick(e);
	};

	render() {
		const { className, style, label, exclusive, disabled } = this.props;
		const { selected } = this.state;
		return (
			<div className={'checkbox-container'} onClick={exclusive ? undefined : this.onClick}>
				<div className={classNames('checkbox-effects', { disabled })}>
					<div
						className={classNames('checkbox', { selected, disabled }, className)}
						style={style}
						onClick={exclusive ? this.onClick : undefined}>
						{selected ? <div className={'checkmark'} /> : undefined}
					</div>
				</div>
				<span>{label}</span>
			</div>
		);
	}
}
export default Checkbox;
