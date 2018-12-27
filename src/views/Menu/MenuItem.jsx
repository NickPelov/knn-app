import React from 'react';
import Icon from '../../components/Icon/Icon';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItem = (props) => {
	const { icon, text, key, selected, isCollapsed, onClick, className } = props;
	return (
		<div key={key} className={classNames('menuitem', className, { expanded: !isCollapsed, selected })} onClick={onClick}>
			<Icon icon={icon} size={'M'} className={'menuitem-icon'} />
			{!isCollapsed ? <div className={'menuitem-text'}>{text}</div> : undefined}
		</div>
	);
};

MenuItem.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	isCollapsed: PropTypes.bool,
};
export default MenuItem;
