'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { PromotionContext } from '@/context/promotion.context';

export function PromotionProvider({ children, initialActive = true }) {
	const [isPromotionActive, setIsPromotionActive] = useState(initialActive);

	const endedOnceRef = useRef(false);

	const endPromotion = useCallback(() => {
		if (endedOnceRef.current) return;
		endedOnceRef.current = true;

		setIsPromotionActive(false);
	}, []);

	const value = useMemo(() => {
		return { isPromotionActive, endPromotion };
	}, [isPromotionActive, endPromotion]);

	return (
		<PromotionContext.Provider value={value}>
			{children}
		</PromotionContext.Provider>
	);
}
