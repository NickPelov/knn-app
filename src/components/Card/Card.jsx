import React from 'react';
import classNames from 'classnames';

const Card = (props) => {
	const { children, className, style } = props;
	return (
		<div className={classNames('card', className)} style={style}>
			{children}
		</div>
	);
};
export default Card;
