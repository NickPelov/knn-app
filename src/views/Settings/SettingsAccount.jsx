import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Input from '../../components/Input/Input';
import Icon from '../../components/Icon/Icon';
import Tooltip from '../../components/Tooltip/Tooltip';
import Button from '../../components/Button/Button';

const SettingsAccount = (props) => {
	console.log('tuk');
	return (
		<div className={'settings-content-container settings-account-container'}>
			<div className={'settings-account-initial-row'}>
				<Avatar size={'XXXL'} status={'active'} />
				<Input value={'First Name'} />
				<Input value={'Last Name'} />
			</div>
			<Input
				value={
					'DescriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
				isTextarea
			/>
			<div className={'settings-account-email-row'}>
				<Input value={'Email'} />
				<Tooltip text={'Email is not verified!'} position={'top'}>
					<Icon icon={'icon-warning'} size={'M'} />
				</Tooltip>
			</div>
			<Input value={'Phone'} />
			<Input value={'Work Experience'} isTextarea />
			<Button label={'Save'} filled />
			<Button label={'Cancel'} filled />
		</div>
	);
};

export default SettingsAccount;
