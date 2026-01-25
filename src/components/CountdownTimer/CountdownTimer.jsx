'use client';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';

export function CountdownTimer({ initialSeconds }) {
	const { minutes, seconds, isDanger, isZero } = useCountdownTimer({
		initialSeconds,
	});

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
			{minutes.toString().padStart(2, '0')}:
			{seconds.toString().padStart(2, '0')}
		</p>
	);
}
