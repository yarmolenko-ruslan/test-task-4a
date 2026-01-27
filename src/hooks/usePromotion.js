'use client';

import { useContext } from 'react';
import { PromotionContext } from '@/context/promotion.context';

export function usePromotion() {
	const ctx = useContext(PromotionContext);

	if (!ctx) {
		throw new Error('usePromotion must be used within <PromotionProvider />');
	}

	return ctx;
}
