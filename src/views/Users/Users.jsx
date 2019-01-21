import React from 'react';
import User from './User';
const Users = (props) => {
	const users = [
		{
			id: 0,
			firstName: 'Pesho',
			lastName: 'Ivanov',
			messages: [
				{ id: 1, body: 'Something', author: true },
				{ id: 2, body: 'Something', author: false },
				{ id: 3, body: 'Something', author: true },
				{ id: 4, body: 'Something', author: false },
				{ id: 5, body: 'Something', author: true },
				{ id: 6, body: 'Something', author: true },
			],
			status: 'online',
		},
		{ id: 1, firstName: 'Nikolay', lastName: 'Pelov', message: [], status: 'online' },
		{ id: 2, firstName: 'Kaloyan', lastName: 'Ivanov', message: [], status: 'offline' },
		{ id: 3, firstName: 'Petur', lastName: 'Makriev', message: [], status: 'online' },
		{ id: 4, firstName: 'Jurian', lastName: 'Berg', message: [], status: 'online' },
		{ id: 5, firstName: 'Mathijs', lastName: 'Schoolen', message: [], status: 'offline' },
		{ id: 6, firstName: 'Siyana', lastName: 'Stoyanova', message: [], status: 'online' },
		{ id: 7, firstName: 'Ox', lastName: 'Jenkins', message: [], status: 'offline' },
		{ id: 8, firstName: 'Fabian', lastName: 'Krikke', message: [], status: 'online' },
		{ id: 9, firstName: 'Ivan', lastName: 'Stoilchev', message: [], status: 'offline' },
	];
	return (
		<div className={'users-container'}>
			{users.map((user, index) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};

export default Users;
