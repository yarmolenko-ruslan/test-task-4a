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
		<p
			className={`
          font-bold text-[40px] tracking-[1.7px]
          ${
						isZero
							? 'text-white'
							: isDanger
								? 'text-(--danger-color)'
								: 'text-(--color-yellow-two)'
					}
        `}
		>
			<span className='relative font-(family-name:--font-raleway) tabular-nums'>
				<Star
					isZero={isZero}
					isDanger={isDanger}
					className='absolute top-4.25 -left-5.75'
				/>
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}
				<Star
					isZero={isZero}
					isDanger={isDanger}
					className='absolute top-4.25 -right-5.75'
				/>
			</span>
		</p>
	);
}
