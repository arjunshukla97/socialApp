import HTTP from '@utils/HTTP';

class HomeService {
	getFeed = () => {
		return HTTP.get(
			'https://api.realworld.io/api/articles?limit=10&offset=0',
		);
	};
}

export default new HomeService();
