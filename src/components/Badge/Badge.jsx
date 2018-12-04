import React from 'react';

const Badge = (props) => {
	const { children, value, style } = props;

	return (
		<div className={'badge'}>
			{children}
			<div className={'badge-value'} style={style}>
				{value}
			</div>
		</div>
	);
};
export default Badge;
