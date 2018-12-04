import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import Card from './Card';
import './Card.css';
import Button from '../Button/Button';
import '../Button/Button.css';
import Badge from '../Badge/Badge';
import '../Badge/Badge.css';

storiesOf('Card', module)
	.addDecorator(centered)
	.add('Default', () => <Card style={{ width: '500px', height: '500px' }} />)
	.add('With content', () => (
		<Card style={{ width: '300px', height: '40px' }}>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '300px', height: '50px', color: '#d9b310' }}>
				<div> Home</div>
				<div>
					<Badge value={3}>About</Badge>
				</div>
				<div>
					<Badge value={1} style={{ backgroundColor: 'red' }}>
						<Button label={'button'} filled />
					</Badge>
				</div>
			</div>
		</Card>
	))
	.add('With class', () => <Card style={{ width: '500px', height: '500px' }} className={'example-class one-more'} />);
