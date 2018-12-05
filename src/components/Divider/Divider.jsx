import React from 'react';
import classNames from 'classnames';

const Divider = (props) => {
	const { className, style } = props;
	return <div className={classNames('divider', className)} style={style} />;
};
export default Divider;
