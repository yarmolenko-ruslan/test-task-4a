'use client';

import { useEffect, useState } from 'react';

export function CountdownTimer({ initialSeconds = 120 }) {
	const [time, setTime] = useState(initialSeconds);

	useEffect(() => {
		if (time <= 0) return;

		const interval = setInterval(() => {
			setTime(prev => (prev <= 1 ? 0 : prev - 1));
		}, 1000);

		return () => clearInterval(interval);
	}, [time]);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const isDanger = time <= 30;
	const zero = time === 0;

	return (
		<section className='text-center bg-(--background-timer) py-2'>
			<h2 className='text-2xl font-semibold'>Успейте открыть пробную неделю</h2>
			<p
				className={`
          font-bold
          text-[40px]
        ${isDanger ? 'text-(--danger-color)' : 'text-(--color-yellow-two)'}
        ${zero && 'text-white'}
      `}
			>
				{minutes}:{seconds.toString().padStart(2, '0')}
			</p>
		</section>
	);
}
