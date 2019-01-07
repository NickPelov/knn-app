import React from 'react';
import ProjectsSummary from './ProjectsSummary';
import EventsSummary from './EventsSummary';

const Home = (props) => {
	return (
		<div className={'home-container'}>
			<ProjectsSummary />
			<EventsSummary />
		</div>
	);
};

export default Home;
