import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import Tooltip from './Tooltip';
import './Tooltip.css';
import Button from '../Button/Button';
import '../Button/Button';

storiesOf('Tooltip', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Tooltip text={'Add'} position={'top'}>
					<Button label={'Click Me'} onClick={action('clicked')} />
				</Tooltip>
				<Tooltip text={'Verify Email'} position={'bottom'}>
					<Button label={'Click Me'} onClick={action('clicked')} />
				</Tooltip>
			</div>
			<br />
			<br />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<Tooltip text={'This button gives you the answer to the universe'} position={'left'}>
					<Button label={'Click Me'} onClick={action('clicked')} />
				</Tooltip>
				<Tooltip text={'Solves world hunger'} position={'right'}>
					<Button label={'Click Me'} onClick={action('clicked')} />
				</Tooltip>
			</div>
		</div>
	));
