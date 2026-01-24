'use client';
import { useEffect, useState } from 'react';

export function useCountdownTimer({
	initialSeconds = 120,
	dangerSeconds = 30,
}) {
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

	const isDanger = time <= dangerSeconds;
	const isZero = time === 0;

	return {
		time,
		minutes,
		seconds,
		isDanger,
		isZero,
	};
}
