import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import Badge from './Badge';
import './Badge.css';
import Button from '../Button/Button';
import '../Button/Button.css';

storiesOf('Badge', module)
	.addDecorator(centered)
	.add('Default', () => <Badge value={1} />)

	.add('On Button', () => (
		<Badge value={8}>
			<Button label={'button'} filled />
		</Badge>
	))
	.add('On Text', () => (
		<Badge value={14}>
			<p>Typography</p>
		</Badge>
	))
	.add('With custom styles', () => (
		<Badge value={11} style={{ backgroundColor: 'red' }}>
			<p>Typography</p>
		</Badge>
	));
