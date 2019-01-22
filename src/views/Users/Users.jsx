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
		{
			id: 1,
			firstName: 'Nikolay',
			lastName: 'Pelov',
			message: [],
			status: 'online',
			avatar:
				'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/c66.66.826.826a/s32x32/539391_418502121518706_1299767261_n.jpg?_nc_cat=109&_nc_ht=scontent-amt2-1.xx&oh=5132e9dad866560da4a080f0e9272137&oe=5CFA9D57',
		},
		{
			id: 2,
			firstName: 'Kaloyan',
			lastName: 'Ivanov',
			message: [],
			status: 'offline',
			avatar:
				'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
		},
		{
			id: 3,
			firstName: 'Veselin',
			lastName: 'Manev',
			message: [],
			status: 'offline',
			avatar:
				'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p32x32/11329750_1606300316294911_5963542878308380939_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=bca4be3041604256402198a5d6a0efee&oe=5CBB81E5',
		},
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
