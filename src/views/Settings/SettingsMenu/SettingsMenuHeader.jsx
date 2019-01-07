import React from 'react';
import Divider from '../../../components/Divider/Divider';
import classNames from 'classnames';

const SettingsMenuHeader = (props) => {
	const { label, className } = props;

	return <div className={classNames('settings-menu-title', className)}>{label.toUpperCase()}</div>;
};

export default SettingsMenuHeader;
