import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';
import './Checkbox.css';

storiesOf('Checkbox', module)
	.addDecorator(centered)
	.add('Default', () => <Checkbox label={'box'} onClick={action('clicked')} />)
	.add('Disabled', () => (
		<div>
			<Checkbox label={'box'} disabled onClick={action('clicked')} />
			<br />
			<Checkbox label={'box'} disabled selected onClick={action('clicked')} />
		</div>
	));
