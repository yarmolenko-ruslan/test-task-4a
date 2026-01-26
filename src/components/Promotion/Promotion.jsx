import { CountdownTimer } from '../CountdownTimer';

export const Promotion = () => {
	return (
		<header className='bg-(--background-timer) text-center pt-2 pb-0.75'>
			<h2 className='text-2xl font-semibold'>Успейте открыть пробную неделю</h2>
			<CountdownTimer initialSeconds={120} />
		</header>
	);
};
