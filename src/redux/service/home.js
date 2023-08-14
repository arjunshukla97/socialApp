import HTTP from '@utils/HTTP';

class HomeService {
	getFeed = (limit = 10, offset = 0) => {
		return HTTP.get(
			`https://api.realworld.io/api/articles?limit=${limit}&offset=${offset}`,
		);
	};
	getSinglePost = slug => {
		return HTTP.get(`https://api.realworld.io/api/articles/${slug}`);
	};
}

export default new HomeService();
