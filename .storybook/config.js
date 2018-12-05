import { configure, addDecorator } from '@storybook/react';
import '../src/styles.css';
import '../src/components/components.css';
import '../src/assets/icons/style.css';
import { withBackgrounds } from '@storybook/addon-backgrounds';

addDecorator(
	withBackgrounds([
		{ name: 'default', value: '#ffffff', default: true },
		{ name: 'twitter', value: '#00aced' },
		{ name: 'facebook', value: '#3b5998' },
		{ name: 'prussian blue', value: '#0b3c5d' },
		{ name: 'ivory black', value: '#1d2731' },
	])
);
// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
