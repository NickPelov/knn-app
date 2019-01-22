const tasks = [
	{
		_id: '091af360-1975-11e9-827c-ed10cabcea47',
		title: 'navbar jumps when scrolling',
		description: 'new description ez',
		deadline: 1548632607000,
		checklist: null,
		assignees: [
			{
				_id: 123,
				first_name: 'Kaloyan',
				last_name: 'Ivanov',
				state: 'active',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
			},
			{
				_id: 1,
				first_name: 'Veselin',
				last_name: 'Slavchev',
				state: 'offline',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p32x32/32602620_1267441340056419_2635871461629231104_n.jpg?_nc_cat=107&_nc_ht=scontent-amt2-1.xx&oh=a1181f677bd0287484180de1f6c55668&oe=5CB6CEE1',
			},
			{
				_id: 1,
				first_name: 'Veselin',
				last_name: 'Manev',
				state: 'active',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p32x32/11329750_1606300316294911_5963542878308380939_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=bca4be3041604256402198a5d6a0efee&oe=5CBB81E5',
			},
		],
		labels: [
			{
				name: 'todo',
				color: '#4286f4',
				'font-color': '#ffffff',
			},
			{
				name: 'test',
				color: '#8738ed',
				'font-color': '#ffffff',
			},
			{
				name: 'bug',
				color: '#e23b3b',
				'font-color': '#ffffff',
			},
		],
		state: 'open',
		author: {
			_id: 123,
			first_name: 'Kaloyan',
			last_name: 'Ivanov',
			image: 'asd/asd/asd/image',
		},
		project_id: '1',
		updated_at: 1547632606613,
		created_at: 1547632606613,
	},
	{
		_id: '260105a0-1975-11e9-827c-ed10cabcea47',
		title: 'IE javascript crashes',
		description: 'new description ez2',
		deadline: 1548632655000,
		checklist: null,
		assignees: [
			{
				_id: 123,
				first_name: 'Kaloyan',
				last_name: 'Ivanov',
				state: 'active',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
			},
			{
				_id: 1,
				first_name: 'Veselin',
				last_name: 'Slavchev',
				state: 'offline',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p32x32/32602620_1267441340056419_2635871461629231104_n.jpg?_nc_cat=107&_nc_ht=scontent-amt2-1.xx&oh=a1181f677bd0287484180de1f6c55668&oe=5CB6CEE1',
			},
		],
		labels: [
			{
				name: 'todo',
				color: '#4286f4',
				'font-color': '#ffffff',
			},
			{
				name: 'ready',
				color: '#57f93e',
				'font-color': '#000000',
			},
		],
		state: 'closed',
		author: {
			_id: 123,
			first_name: 'Kaloyan',
			last_name: 'Ivanov',
			image:
				'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
		},
		project_id: '1',
		updated_at: 1547632655097,
		created_at: 1547632655097,
	},
	{
		_id: '5488a630-19d9-11e9-a12b-a5551eac4e41',
		title: 'onHover event not triggered',
		description: 'new description ez',
		deadline: 1548675683000,
		checklist: null,
		assignees: [
			{
				_id: 123,
				first_name: 'Kaloyan',
				last_name: 'Ivanov',
				state: 'active',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
			},
			{
				_id: 1,
				first_name: 'Nikolay',
				last_name: 'Pelov',
				state: 'offline',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/c66.66.826.826a/s32x32/539391_418502121518706_1299767261_n.jpg?_nc_cat=109&_nc_ht=scontent-amt2-1.xx&oh=5132e9dad866560da4a080f0e9272137&oe=5CFA9D57',
			},
		],
		labels: [
			{
				name: 'todo',
				color: '#4286f4',
				'font-color': '#ffffff',
			},
			{
				name: 'bug',
				color: '#e23b3b',
				'font-color': '#ffffff',
			},
		],
		state: 'open',
		author: {
			_id: 123,
			first_name: 'Kaloyan',
			last_name: 'Ivanov',
			image:
				'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
		},
		project_id: '1',
		updated_at: 1547675682834,
		created_at: 1547675682834,
	},
	,
	{
		_id: '5488a630-19d9-11e9-a12b-a5551eac4e41',
		title: 'kek',
		description: 'new description ez',
		deadline: 1548675683000,
		checklist: null,
		assignees: [
			{
				_id: 1,
				first_name: 'Nikolay',
				last_name: 'Pelov',
				state: 'offline',
				image:
					'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/c66.66.826.826a/s32x32/539391_418502121518706_1299767261_n.jpg?_nc_cat=109&_nc_ht=scontent-amt2-1.xx&oh=5132e9dad866560da4a080f0e9272137&oe=5CFA9D57',
			},
		],
		labels: [
			{
				name: 'bug',
				color: '#e23b3b',
				'font-color': '#ffffff',
			},
		],
		state: 'closed',
		author: {
			_id: 123,
			first_name: 'Kaloyan',
			last_name: 'Ivanov',
			image:
				'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p24x24/12002943_1007582402638121_997236799241593783_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=3fac77067a4380bbe862011639a46644&oe=5CBFB13A',
		},
		project_id: '1',
		updated_at: 1547675682834,
		created_at: 1547675682834,
	},
];

module.exports = { tasks };
