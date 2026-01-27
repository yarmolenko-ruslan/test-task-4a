import { CountdownTimer } from '../CountdownTimer';

export const Promotion = () => {
	return (
		<div
			className='bg-(--background-timer) text-center pt-2 pb-2
			md:pb-3.5 xl:pb-2'
		>
			<h2 className='font-semibold text-[14px] md:text-[18px] xl:text-2xl'>
				Успейте открыть пробную неделю
			</h2>
			<CountdownTimer initialSeconds={120} />
		</div>
	);
};
