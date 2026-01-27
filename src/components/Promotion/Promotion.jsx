import { CountdownTimer } from '../CountdownTimer';

export const Promotion = () => {
	return (
		<div
			className='bg-(--background-timer) text-center pt-[8px] pb-[8px]
			md:pb-[14px] xl:pb-[8px]'
		>
			<h2 className='font-semibold text-[14px] md:text-[18px] xl:text-2xl'>
				Успейте открыть пробную неделю
			</h2>
			<CountdownTimer initialSeconds={120} />
		</div>
	);
};
