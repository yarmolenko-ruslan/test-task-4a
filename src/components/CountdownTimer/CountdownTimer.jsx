'use client';

import clsx from 'clsx';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { Star } from '../Star';

export function CountdownTimer({ initialSeconds }) {
	const { minutes, seconds, isDanger, isZero } = useCountdownTimer({
		initialSeconds,
	});

	return (
		<div
			className={clsx(
				'text-[28px] md:text-[32px] font-bold h-9 xl:text-[40px] xl:tracking-[1.7px] xl:h-13.75',
				{
					'text-white': isZero,
					'text-(--danger-color)': !isZero && isDanger,
					'text-(--color-yellow-two)': !isZero && !isDanger,
				},
			)}
		>
			<span className='relative font-(--font-raleway) tabular-nums leading-[1.1]'>
				<Star
					isZero={isZero}
					isDanger={isDanger}
					className='top-2 md:top-3.5 -left-6.25 xl:-left-5.75 xl:top-4.25'
				/>
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}
				<Star
					isZero={isZero}
					isDanger={isDanger}
					className='top-2 md:top-3.5 -right-6.25 xl:-right-5.75 xl:top-4.25'
				/>
			</span>
		</div>
	);
}
