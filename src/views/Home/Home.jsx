import React from 'react';
import Menu from '../Menu/Menu';

const Home = (props) => {
	let { title, children } = props;
	return (
		<div>
			<Menu />
		</div>
	);
};

export default Home;
