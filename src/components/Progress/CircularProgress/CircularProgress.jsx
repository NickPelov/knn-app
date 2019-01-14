import React from 'react';
import classNames from 'classnames';

const CircularProgress = (props) => {
	const { color, className, style } = props;

	return (
		<svg
			className={classNames('circular-progress', className)}
			width="65px"
			height="65px"
			viewBox="0 0 66 66"
			xmlns="http://www.w3.org/2000/svg"
			style={style}>
			<circle
				className={classNames('circle', className)}
				fill="none"
				stroke={color ? color : '#66cc33'}
				stroke-width="6"
				stroke-linecap="round"
				cx="33"
				cy="33"
				r="30"
			/>
		</svg>
	);
};
export default CircularProgress;
