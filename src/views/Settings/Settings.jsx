import React from 'react';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import { Route } from 'react-router';
import SettingsAccount from './SettingsAccount';
import SettingsConnections from './SettingsConnections';

const Settings = (props) => {
	console.log(props.match.path);
	const { match } = props;
	return (
		<div className={'settings-container'}>
			<SettingsMenu />
			<Route path={`${match.path}`} component={SettingsConnections} />
			<Route path={`${match.path}/account`} component={SettingsAccount} />
		</div>
	);
};

export default Settings;
