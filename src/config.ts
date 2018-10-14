let baseUrl = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
	baseUrl = 'http://api.itfest.narfu.ru';
}

export const apiHost = baseUrl;
