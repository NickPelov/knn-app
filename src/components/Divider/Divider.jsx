import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Divider = (props) => {
	const { direction, className, style } = props;
	return <div className={classNames('divider', direction, className)} style={style} />;
};

Divider.propTypes = {
	direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

Divider.defaultProps = {
	direction: 'horizontal',
};
export default Divider;
