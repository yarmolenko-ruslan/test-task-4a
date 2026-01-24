const URL = 'https://t-core.fit-hub.pro/Test/GetTariffs';

export async function getPrices() {
	const res = await fetch(URL, {
		next: { revalidate: 3600 },
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch prices: ${res.status}`);
	}

	return res.json();
}
