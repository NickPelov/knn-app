import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import Divider from './Divider';
import './Divider.css';

storiesOf('Divider', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div style={{ width: '800px', height: '200px', color: 'white' }}>
			<h5>Notes</h5>
			<Divider label={'box'} onClick={action('clicked')} />
			<p>Createa a storybook</p>
		</div>
	));
