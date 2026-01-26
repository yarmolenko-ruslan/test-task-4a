'use client';

import { useState } from 'react';
import { PriceItem } from '../PriceItem';

export function PriceList({ prices, defaultSelectedPeriod }) {
	//
	const incomingBestPeriod = prices.find(p => p.is_best)?.period ?? null;

	const initial = defaultSelectedPeriod ?? prices[0]?.period ?? null;
	const [selectedPeriod, setSelectedPeriod] = useState(initial);

	const sortedPrices = [...prices].sort((a, b) => {
		if (a.is_best) return -1;
		if (b.is_best) return 1;
		return 0;
	});

	return (
		<ul className='grid grid-cols-3 gap-x-3.5 gap-y-3.25 mb-5'>
			{sortedPrices.map(price => (
				<PriceItem
					// Здесь взят period за ключ, поскольку в массиве 2 карточки с одинаковыми id
					key={price.period}
					price={price}
					selected={price.period === selectedPeriod}
					incomingBest={price.period === incomingBestPeriod}
					onSelect={() => setSelectedPeriod(price.period)}
				/>
			))}
		</ul>
	);
}
