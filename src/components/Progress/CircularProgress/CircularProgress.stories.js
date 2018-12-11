import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import CircularProgress from './CircularProgress';
import './CircularProgress.css';

storiesOf('CircularProgress', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<CircularProgress color={'#3498db'} />
		</div>
	));
