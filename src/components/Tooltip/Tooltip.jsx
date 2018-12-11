import React from 'react';
import classNames from 'classnames';

const Tooltip = (props) => {
	const { children, title, text, position, className, style } = props;

	return (
		<div className={classNames('tooltip-wrapper', className)}>
			<div>{children}</div>
			<div className={classNames('tooltip', position)} style={style}>
				{title ? <div className={'tooltip-title'}>{title}</div> : undefined}

				{text ? <div className={'tooltip-text'}>{text}</div> : undefined}
			</div>
		</div>
	);
};
export default Tooltip;
