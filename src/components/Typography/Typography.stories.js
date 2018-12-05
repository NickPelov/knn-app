import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

storiesOf('Typography', module)
	.addDecorator(centered)
	.add('Headers', () => (
		<div>
			<h1>Header 1</h1>
			<h2>Header 2</h2>
			<h3>Header 3</h3>
			<h4>Header 4</h4>
			<h5>Header 5</h5>
			<h6>Header 6</h6>
		</div>
	))
	.add('Body', () => (
		<div>
			<h3>Body</h3>
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				<br />
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				<br />
				dolor in reprehenderit in voluptate velit esse cillum dolore eu
				<br />
			</span>
			<br />
			<h3>Paragraph</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				<br />
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
				<br />
				dolor in reprehenderit in voluptate velit esse cillum dolore eu
				<br />
			</p>
			<h3>Link</h3>
			<a onClick={action('clicked')}>click me!</a>
		</div>
	));
