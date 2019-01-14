import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import HorizontalScroll from './HorizontalScroll';
import './HorizontalScroll.css';
import Card from '../Card/Card';
import '../Card/Card.css';
import Button from '../Button/Button';
import '../Button/Button.css';
import Badge from '../Badge/Badge';
import '../Badge/Badge.css';

const styles = {
	card: {
		width: '400px',
		height: '350px',
		border: 'solid black',
	},
	container: {
		width: '1000px',
		height: '350px',
	},
};

storiesOf('HorizontalScroll', module)
	.addDecorator(centered)
	.add('Default', () => (
		<HorizontalScroll style={styles.container}>
			<div style={styles.card} />
			<div style={styles.card} />
			<div style={styles.card} />
			<div style={styles.card} />
			<div style={styles.card} />
		</HorizontalScroll>
	));
