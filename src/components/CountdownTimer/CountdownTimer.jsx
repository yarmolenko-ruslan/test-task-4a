'use client';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';

export function CountdownTimer({ initialSeconds }) {
	const { minutes, seconds, isDanger, isZero } = useCountdownTimer({
		initialSeconds,
	});

	return (
		<section className='text-center bg-(--background-timer) pt-2 pb-0.75'>
			<h2 className='text-2xl font-semibold tracking-[1.7px]'>
				Успейте открыть пробную неделю
			</h2>

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
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}
			</p>
		</section>
	);
}
