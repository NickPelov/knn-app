import React from 'react';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import { Route } from 'react-router';
import SettingsAccount from './SettingsAccount';
import SettingsConnections from './SettingsConnections';
import SettingsMenuList from './SettingsMenuList';

const Settings = (props) => {
	const { match } = props;
	return (
		<div className={'settings-container'}>
			<SettingsMenu />
			<Route path={`${match.path}/connections`} component={SettingsConnections} />
			<Route path={`${match.path}/account`} component={SettingsAccount} />
			<Route path={`${match.path}`} component={SettingsMenuList} />
		</div>
	);
};

export default Settings;
