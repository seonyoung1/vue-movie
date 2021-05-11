import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: '6f26edc26d6ed9d164d9bc332258be3f',
	},
});

export const movieApi = {
	nowPlaying: (page) =>
		api.get('movie/now_playing', {
			params: {
				page: page,
			},
		}),
	popular: (page) =>
		api.get('', {
			params: {
				page: page,
			},
		}),
	search: (word) =>
		api.get('', {
			params: {
				query: word,
			},
		}),
	detail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos',
			},
		}),
};
