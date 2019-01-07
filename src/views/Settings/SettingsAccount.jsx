import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Input from '../../components/Input/Input';
import Icon from '../../components/Icon/Icon';
import Tooltip from '../../components/Tooltip/Tooltip';

const SettingsAccount = (props) => {
	return (
		<div className={'settings-content-container settings-account-container'}>
			<div className={'settings-account-initial-row'}>
				<Avatar size={'XXXL'} status={'active'} />
				<Input defaultValue={'First Name'} />
				<Input defaultValue={'Last Name'} />
			</div>
			<Input
				defaultValue={
					'DescriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
				isTextarea
			/>
			<div className={'settings-account-email-row'}>
				<Input defaultValue={'Email'} />
				<Tooltip text={'Email is not verified!'} position={'top'}>
					<Icon icon={'icon-warning'} size={'M'} />
				</Tooltip>
			</div>
			<Input defaultValue={'Phone'} />
			<Input defaultValue={'Work Experience'} isTextarea />
		</div>
	);
};

export default SettingsAccount;
