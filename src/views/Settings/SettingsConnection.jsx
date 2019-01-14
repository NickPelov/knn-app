import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon/Icon';
import Switch from '../../components/Switch/Switch';
import Divider from '../../components/Divider/Divider';
import classNames from 'classnames';

const SettingsConnection = (props) => {
	const { icon, header, description, className, iconClassName } = props;
	return (
		<div className={classNames('settings-connection-container', className)}>
			<Icon icon={icon} size={'XXL'} className={classNames('settings-connection-icon', iconClassName)} />
			<span className={classNames('settings-connection-information-container')}>
				<p className={classNames('settings-connection-header')}>{header}</p>
				<p className={classNames('settings-connection-description')}>{description}</p>
			</span>
			<Divider direction={'vertical'} />
			<Switch />
		</div>
	);
};

SettingsConnection.propTypes = {
	icon: PropTypes.string.isRequired,
};
export default SettingsConnection;
