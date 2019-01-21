import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Input from '../../components/Input/Input';
import Icon from '../../components/Icon/Icon';
import Tooltip from '../../components/Tooltip/Tooltip';
import Button from '../../components/Button/Button';

const SettingsAccount = (props) => {
	return (
		<div className={'settings-content-container settings-account-container'}>
			<div className={'settings-account-initial-row'}>
				<Avatar size={'XXXL'} status={'active'} />
				<Input className={'settings-account-name'} label={'First Name'} />
				<Input className={'settings-account-name'} label={'Last Name'} />
			</div>
			<Input className={'settings-account-description'} value={''} isTextarea />
			<div className={'settings-account-email-row'}>
				<Input className={'settings-account-email'} label={'Email'} />
				<Tooltip text={'Email is not verified!'} position={'top'}>
					<Icon icon={'icon-warning'} size={'M'} />
				</Tooltip>
			</div>
			<Input className={'settings-account-phone'} label={'Phone'} />
			<Input className={'settings-account-work'} value={'Work Experience'} isTextarea />
			<Button className={'settings-account-save'} label={'Save'} filled />
		</div>
	);
};

export default SettingsAccount;
