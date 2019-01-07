import React from 'react';
import classNames from 'classnames';

const HorizontalScroll = (props) => {
	const { children, className, style } = props;
	let scrollPosition = 0;

	function onWheel(e) {
		const element = e.currentTarget;
		e.preventDefault();
		if (e.deltaY < 0) {
			// scrolling up
			scrollPosition -= 40;
		} else if (e.deltaY > 0) {
			//scrolling down
			scrollPosition += 40;
		}
		if (scrollPosition < -10) {
			scrollPosition = 0;
			return;
		} else if (scrollPosition > element.scrollWidth) {
			scrollPosition = element.scrollWidth;
			return;
		}

		element.scrollLeft = scrollPosition;
	}

	return (
		<div className={classNames('horizontal-scroll', className)} style={style} onWheel={onWheel.bind(this)}>
			{children}
		</div>
	);
};
export default HorizontalScroll;
