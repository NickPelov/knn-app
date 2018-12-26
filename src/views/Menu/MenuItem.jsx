import React from 'react';
import Icon from '../../components/Icon/Icon';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItem = (props) => {
	const { icon, text, isCollapsed, onClick } = props;
	return (
		<div className={classNames('menuitem')} onClick={onClick}>
			<Icon icon={icon} size={'M'} className={'menuitem-icon'} />
			{!isCollapsed ? <div>{text}</div> : undefined}
		</div>
	);
};

MenuItem.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	isCollapsed: PropTypes.bool,
};
export default MenuItem;
