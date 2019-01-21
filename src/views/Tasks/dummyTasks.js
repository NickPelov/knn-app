const tasks = [
	{
		_id: '091af360-1975-11e9-827c-ed10cabcea47',
		title: 'task 1',
		description: 'new description ez',
		deadline: 1547632607000,
		checklist: null,
		assignees: [
			{
				_id: 123,
				first_name: 'Kaloyan',
				last_name: 'Ivanov',
				image: 'asd/asd/asd/image',
			},
			{
				_id: 12,
				first_name: 'ASd',
				last_name: 'qdw3',
				image: 'asd/asd/asd/image',
			},
			{
				_id: 1,
				first_name: 'vfd',
				last_name: 'asdqwe',
				image: 'asd/asd/asd/image',
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
		title: 'task 2',
		description: 'new description ez2',
		deadline: 1547632655000,
		checklist: null,
		assignees: [
			{
				_id: 123,
				first_name: 'Kaloyan',
				last_name: 'Ivanov',
				image: 'asd/asd/asd/image',
			},
			{
				_id: 1,
				first_name: 'asd',
				last_name: 'q',
				image: 'asd/asd/asd/image',
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
		state: 'open',
		author: {
			_id: 123,
			first_name: 'Kaloyan',
			last_name: 'Ivanov',
			image: 'asd/asd/asd/image',
		},
		project_id: '1',
		updated_at: 1547632655097,
		created_at: 1547632655097,
	},
	{
		_id: '5488a630-19d9-11e9-a12b-a5551eac4e41',
		title: 'task 3',
		description: 'new description ez',
		deadline: 1547675683000,
		checklist: null,
		assignees: [
			{
				_id: 123,
				first_name: 'Kaloyan',
				last_name: 'Ivanov',
				image: 'asd/asd/asd/image',
			},
			{
				_id: 1,
				first_name: 'asd',
				last_name: 'q',
				image: 'asd/asd/asd/image',
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
			image: 'asd/asd/asd/image',
		},
		project_id: '1',
		updated_at: 1547675682834,
		created_at: 1547675682834,
	},
];

module.exports = { tasks };
