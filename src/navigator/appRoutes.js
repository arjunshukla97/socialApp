import Login from '@screens/Auth/Login';
import Home from '@screens/Home';
import PostDetails from '@screens/PostDetails';

export const STACKS = [
	{
		title: '',
		component: Home,
		key: 'Home',
		header: false,
	},
	{
		title: '',
		component: Login,
		key: 'Login',
		header: true,
	},
	{
		title: '',
		component: PostDetails,
		key: 'PostDetails',
		header: true,
	},
];
