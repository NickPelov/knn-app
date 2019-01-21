import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import Avatar from './Avatar';
import './Avatar.css';

storiesOf('Avatar', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Avatar />
			User Name
		</div>
	))
	.add('With Image', () => (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Avatar
				image={
					'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg'
				}
				size={'XXXL'}
				status={'offline'}
			/>
			Offline
		</div>
	))
	.add('Size', () => (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar
					size={'L'}
					status={'active'}
					image={
						'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg'
					}
				/>
				Large
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar
					size={'XL'}
					status={'active'}
					image={
						'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg'
					}
				/>
				Extra Large
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar
					size={'XXL'}
					status={'active'}
					image={
						'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg'
					}
				/>
				Extra Extra Large
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar
					size={'XXXL'}
					status={'active'}
					image={
						'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg'
					}
				/>
				Extra Extra Extra Large
			</div>
		</div>
	))
	.add('With Status', () => (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar size={'XXXL'} status={'offline'} />
				Offline
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar size={'XXXL'} status={'active'} />
				Active
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar size={'XXXL'} status={'away'} />
				Away
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar size={'XXXL'} status={'busy'} />
				Busy
			</div>
		</div>
	));
