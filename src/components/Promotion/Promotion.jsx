'use client';

import clsx from 'clsx';
import { CountdownTimer } from '../CountdownTimer';
import { usePromotion } from '@/hooks/usePromotion';

export const Promotion = () => {
	const { isPromotionActive } = usePromotion();

	return (
		<div
			className={clsx(
				'bg-(--background-timer) text-center pt-2 pb-2 md:pb-3.5 xl:pb-2',
				{
					'opacity-70': !isPromotionActive,
				},
			)}
		>
			<h2 className='font-semibold text-[14px] md:text-[18px] xl:text-2xl'>
				{isPromotionActive
					? 'Успейте открыть пробную неделю'
					: 'Скидка закончилась'}
			</h2>

			<CountdownTimer initialSeconds={2} />
		</div>
	);
};
