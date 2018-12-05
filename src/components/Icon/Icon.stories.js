import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import Icon from './Icon';
import './Icon.css';

storiesOf('Icon', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div>
			<Icon icon={'icon-discord'} />
			Discord
		</div>
	))
	.add('Size', () => (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'S'} />
				Regular
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'M'} />
				Medium
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'L'} />
				Large
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'XL'} />
				Extra Large
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'XXL'} />
				Extra Extra Large
			</div>
		</div>
	))
	.add('Styled', () => (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'L'} style={{ color: '#328dc1' }} />
				Large
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Icon icon={'icon-account_circle'} size={'L'} style={{ backgroundColor: '#d9b310', borderRadius: '50%' }} />
				Large
			</div>
		</div>
	));
