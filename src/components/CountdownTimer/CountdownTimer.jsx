'use client';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { Star } from '../Star';

export function CountdownTimer({ initialSeconds }) {
	const { minutes, seconds, isDanger, isZero } = useCountdownTimer({
		initialSeconds,
	});
	/* Шрифт, который указан в Figma отличается от того, который представлен
			на самом макете, хотя наименование одинаково (font-(family-name:--font-raleway)) */
	return (
		<div
			className={`text-[28px] md:text-[32px] font-bold h-[36px] xl:h-[52px]
           xl:text-[40px] xl:tracking-[1.7px] xl:h-[55px]
          ${
						isZero
							? 'text-white'
							: isDanger
								? 'text-(--danger-color)'
								: 'text-(--color-yellow-two)'
					}
        `}
		>
			<span className='font-bold relative font-(family-name:--font-raleway) tabular-nums leading-1.1'>
				<Star
					isZero={isZero}
					isDanger={isDanger}
					className='top-[8px] md:top-[14px] -left-[25px] xl:-left-5.75 xl:top-4.25'
				/>
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}
				<Star
					isZero={isZero}
					isDanger={isDanger}
					className='top-[8px] md:top-[14px] -right-[25px] xl:-right-5.75 xl:top-4.25'
				/>
			</span>
		</div>
	);
}
