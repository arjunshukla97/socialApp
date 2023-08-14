import HTTP from '@utils/HTTP';

class AuthService {
	login = data => {
		return HTTP.post('https://api.realworld.io/api/users/login', data);
	};
}

export default new AuthService();
