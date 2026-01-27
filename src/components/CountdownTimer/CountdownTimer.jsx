'use client';

import clsx from 'clsx';
import { useEffect, useMemo } from 'react';
import { Star } from '../Star';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { usePromotion } from '@/hooks/usePromotion';

export function CountdownTimer({ initialSeconds }) {
	const { minutes, seconds, isDanger, isZero } = useCountdownTimer({
		initialSeconds,
	});

	const { isPromotionActive, endPromotion } = usePromotion();

	useEffect(() => {
		if (!isPromotionActive) return;
		if (!isZero) return;
		endPromotion();
	}, [isPromotionActive, isZero, endPromotion]);

	const totalSeconds = useMemo(
		() => minutes * 60 + seconds,
		[minutes, seconds],
	);

	const isUrgent30 =
		isPromotionActive && !isZero && totalSeconds > 0 && totalSeconds <= 30;

	return (
		<div className='flex flex-col items-center gap-1'>
			<div
				className={clsx(
					'text-[28px] md:text-[32px] font-bold h-9 xl:text-[40px] xl:tracking-[1.7px] xl:h-13.75 transition',
					{
						'text-white animate-pulse': isZero,
						'promo-timer-blink text-(--danger-color)': isUrgent30,
						'text-(--danger-color)': !isZero && !isUrgent30 && isDanger,
						'text-(--color-yellow-two)': !isZero && !isUrgent30 && !isDanger,
					},
				)}
			>
				<span className='relative font-(--font-raleway) tabular-nums leading-[1.1]'>
					<Star
						isZero={isZero}
						isDanger={isDanger || isUrgent30}
						className='top-2 md:top-3.5 -left-6.25 xl:-left-5.75 xl:top-4.25'
					/>
					{minutes.toString().padStart(2, '0')}:
					{seconds.toString().padStart(2, '0')}
					<Star
						isZero={isZero}
						isDanger={isDanger || isUrgent30}
						className='top-2 md:top-3.5 -right-6.25 xl:-right-5.75 xl:top-4.25'
					/>
				</span>
			</div>
		</div>
	);
}
