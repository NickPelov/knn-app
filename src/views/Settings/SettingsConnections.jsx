import React from 'react';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import { Route } from 'react-router';
import SettingsAccount from './SettingsAccount';
import SettingsConnection from './SettingsConnection';

const SettingsConnections = (props) => {
	console.log(props.match.path);
	const { match } = props;
	return (
		<div className={'settings-content-container settings-connections-container'}>
			<SettingsConnection
				icon={'icon-twitter'}
				header={'Connect Twitter Account'}
				description={'asa d as dasd a sd wa dwadwadwad wa dw ad aw d ad a dasda '}
			/>
			<SettingsConnection
				icon={'icon-twitter'}
				header={'Connect Twitter Account'}
				description={'asa d as dasd a sd wa dwadwadwad wa dw ad aw d ad a dasda '}
			/>
			<SettingsConnection
				icon={'icon-twitter'}
				header={'Connect Twitter Account'}
				description={'asa d as dasd a sd wa dwadwadwad wa dw ad aw d ad a dasda '}
			/>
			<SettingsConnection
				icon={'icon-twitter'}
				header={'Connect Twitter Account'}
				description={'asa d as dasd a sd wa dwadwadwad wa dw ad aw d ad a dasda '}
			/>
		</div>
	);
};

export default SettingsConnections;
