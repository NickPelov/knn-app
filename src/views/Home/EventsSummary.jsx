import React from 'react';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';
import Card from '../../components/Card/Card';
const styles = {
	card: {
		width: '245px',
		height: '221px',
	},
};
const EventsSummary = (props) => {
	return (
		<div>
			<h5>Upcoming Events</h5>
			<HorizontalScroll className={'home-projects-scroll'}>
				<Card style={styles.card} />
				<Card style={styles.card} />
				<Card style={styles.card} />
				<Card style={styles.card} />
				<Card style={styles.card} />
			</HorizontalScroll>
		</div>
	);
};

export default EventsSummary;
