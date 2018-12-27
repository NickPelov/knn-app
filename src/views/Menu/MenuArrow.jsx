import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const MenuArrow = (props) => {
	const { isCollapsed, onClick } = props;
	return <MenuItem className={'menuitem-arrow'} icon={'icon-double-arrow'} isCollapsed={isCollapsed} onClick={onClick} />;
};

MenuArrow.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	isCollapsed: PropTypes.bool,
};
export default MenuArrow;
