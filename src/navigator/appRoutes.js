import Login from '@screens/Auth/Login';
import Home from '@screens/Home';

export const STACKS = [
	{
		title: 'Home',
		component: Home,
		key: 'Home',
		header: true,
	},
	{
		title: 'Login',
		component: Login,
		key: 'Login',
		header: false,
	},
];
