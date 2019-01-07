import React from 'react';
import Divider from '../../../components/Divider/Divider';
import SettingsMenuHeader from './SettingsMenuHeader';
import SettingsMenuItem from './SettingsMenuItem';
const SettingsMenu = (props) => {
	return (
		<div className={'settings-menu'}>
			<h6 className={'settings-menu-username'}>Name Surname</h6>
			<SettingsMenuHeader label={'general'} />
			<SettingsMenuItem label={'Account'} route={'account'} />
			<SettingsMenuItem label={'Connections'} route={'connections'} />
			<Divider />
			<SettingsMenuHeader label={'notification'} />
			<SettingsMenuItem label={'Browser Notifications'} route={'browser'} />
			<SettingsMenuItem label={'Email Notifications'} route={'email'} />
			<SettingsMenuItem label={'Mobile Notification'} route={'mobile'} />
			<Divider />
			<SettingsMenuHeader label={'security'} />
			<SettingsMenuItem label={'Password'} route={'password'} />
			<SettingsMenuItem label={'Two-Factor Authentication'} route={'authentication'} />
			<Divider />
			<SettingsMenuHeader label={'visuals'} />
			<SettingsMenuItem label={'Theme'} route={'theme'} />
			<SettingsMenuItem label={'Menu Items'} route={'menu'} />
			<Divider />
		</div>
	);
};

export default SettingsMenu;
