import clsx from 'clsx';

export function PriceItem({ price, selected, incomingBest, onSelect }) {
	const discount = Math.round((1 - price.price / price.full_price) * 100);

	return (
		<li
			onClick={onSelect}
			role='button'
			tabIndex={0}
			onKeyDown={e => e.key === 'Enter' && onSelect()}
			aria-pressed={selected}
			className={clsx(
				'flex gap-7 md:gap-11.5 items-center h-29.5 md:h-32.75 w-full relative border-2 rounded-[20px] bg-(--background-price) cursor-pointer hover:scale-[1.03] transition duration-700 select-none pr-2.75 md:pr-5.5 pl-5 md:pl-7.5 py-5 xl:rounded-[40px]',
				{
					'border-(--color-yellow)': selected,
					'border-(--color-border)': !selected,
					'xl:flex xl:gap-10 xl:items-center xl:col-span-3 xl:col-start-1 xl:max-w-3xl xl:h-48.5 xl:rounded-[34px] xl:pl-30.5 xl:pr-20 xl:pt-8 xl:pb-7.5':
						incomingBest,
					'xl:max-w-60 xl:h-83.75 xl:text-center xl:pt-17.5 xl:pb-5.75 xl:px-4.5':
						!incomingBest,
				},
			)}
		>
			<span
				className={clsx(
					'absolute -top-0.5 py-0.5 w-10.5 md:w-12 h-5.75 rounded-br-md rounded-bl-md md:rounded-br-lg md:rounded-bl-lg bg-(--color-red) font-(--font-gilroy) text-[13px] md:text-[16px] px-1.5 ` xl:w-16.5 xl:h-9.75 xl:px-2 xl:py-1.25 xl:text-[22px] xl:rounded-bl-lg xl:rounded-br-lg',
					{
						'right-12.5 md:right-15.5 xl:left-12.5 xl:right-auto': incomingBest,
						'right-7 md:right-8 xl:left-12.5 xl:right-auto xl:w-17.25':
							!incomingBest,
					},
				)}
			>
				-{discount}%
			</span>

			<div className='flex flex-col xl:block'>
				<h3
					className={clsx(
						'text-[16px] md:text-[18px] leading-[1.2] mb-3 md:mb-4 xl:text-[26px] font-medium xl:leading-6.5',
						{
							'xl:mb-4.5 xl:ml-5.75': incomingBest,
							'xl:mb-8.25 xl:mx-[22.5px]': !incomingBest,
						},
					)}
				>
					{price.period}
				</h3>

				<strong
					className={clsx(
						'block text-[30px] md:text-[34px] w-27.5 md:w-31.25 xl:w-45 font-semibold leading-none xl:text-[49px]',
						{
							'text-(--color-yellow)': selected,
							'text-white': !selected,
						},
					)}
				>
					{price.price} ₽
				</strong>

				<del className='text-[14px] ml-12.5 xl:block text-[#919191] xl:text-[24px] leading-[1.2] xl:ml-19.5'>
					{price.full_price} ₽
				</del>
			</div>

			<p
				className={clsx(
					'line-clamp-3 text-[14px] xl:text-[16px] leading-[1.3] xl:leading-5',
					{
						'xl:max-w-82': incomingBest,
						'xl:max-w-51 xl:mt-13.25 xl:text-left': !incomingBest,
					},
				)}
			>
				{price.text}
			</p>

			{incomingBest && (
				<span className='absolute top-1 xl:top-2.75 right-3.75 xl:right-4.75 text-(--color-yellow) text-[13px] md:text-[16px] xl:text-[22px] font-medium leading-[1.3]'>
					хит!
				</span>
			)}
		</li>
	);
}
