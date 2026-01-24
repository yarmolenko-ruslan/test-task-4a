const URL = 'https://t-core.fit-hub.pro/Test/GetTariffs';

const priceApi = {
	getAll: () => {
		return fetch(URL).then(response => response.json());
	},
};

export default priceApi;
