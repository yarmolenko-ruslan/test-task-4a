export function PriceItem({ price, selected, incomingBest, onSelect }) {
	const discount = Math.round((1 - price.price / price.full_price) * 100);

	const base =
		'flex xl:block gap-[28px] md:gap-[46px] items-center h-[118px] md:h-[131px] w-[100%] relative border-2 rounded-[20px] bg-(--background-price) cursor-pointer hover:scale-[1.03] transition duration-700 select-none pr-[11px] md:pr-[22px] pl-[20px] md:pl-[30px] py-[20px] xl:relative xl:border-2 xl:rounded-[40px] xl:bg-(--background-price) xl:cursor-pointer xl:hover:scale-[1.03] xl:transition xl:duration-700 xl:select-none';

	const largeLayout =
		'xl:flex xl:gap-10 xl:items-center xl:col-span-3 xl:col-start-1 xl:max-w-192 xl:h-48.5 xl:rounded-[34px] xl:pl-30.5 xl:pr-20 xl:pt-[32px] xl:pb-[30px]';

	const normalLayout =
		'xl:max-w-60 xl:h-83.75 xl:text-center xl:pt-[70px] xl:pb-[23px] xl:px-[18px]';

	const border = selected
		? 'border-(--color-yellow)'
		: 'border-(--color-border)';

	return (
		<li
			onClick={onSelect}
			role='button'
			tabIndex={0}
			onKeyDown={e => e.key === 'Enter' && onSelect()}
			aria-pressed={selected}
			className={`${base} ${border}  ${incomingBest ? largeLayout : normalLayout}`}
		>
			<span
				className={`absolute rounded-br-[6px] rounded-bl-[6px] md:rounded-br-[8px] md:rounded-bl-[8px] w-[42px] md:w-[48px] h-[23px] font-medium text-[13px] md:text-[16px] px-[6px] py-[3px] pt-0 xl:absolute xl:w-16.5 xl:h-9.75 xl:px-2 xl:py-1.25 xl:text-[22px] bg-(--color-red) xl:rounded-bl-lg xl:rounded-br-lg font-(family-name:--font-gilroy) top-[-2px] 
					${incomingBest ? 'right-[50px] md:right-[62px] xl:right-auto xl:left-[50px]' : 'right-[28px] md:right-[32px] xl:right-auto xl:left-[50px] xl:w-[69px]'}`}
			>
				-{discount}%
			</span>
			<div className='flex flex-col xl:block'>
				<h3
					className={`text-[16px] md:text-[18px] leading-[1.2] mb-[12px] md:mb-[16px] xl:text-[26px] font-medium xl:leading-6.5 ${incomingBest ? 'xl:mb-4.5 xl:ml-5.75' : 'xl:mb-8.25 xl:mx-[22.5px]'}`}
				>
					{price.period}
				</h3>
				<strong
					className={`block text-[30px] md:text-[34px] w-[110px] md:w-[125px] xl:w-[180px] font-semibold leading-none xl:text-[49px] ${selected ? 'text-(--color-yellow)' : 'font-white'}`}
				>
					{price.price} ₽
				</strong>
				<del className='text-[14px] ml-[50px] xl:block text-[#919191] xl:text-[24px] leading-[1.2] xl:ml-19.5'>
					{price.full_price} ₽
				</del>
			</div>
			<p
				className={`line-clamp-3 text-[14px] md:text-[14px] xl:text-[16px] leading-[1.3]  xl:leading-5 ${incomingBest ? 'xl:max-w-82' : 'xl:max-w-51 xl:mt-[53px] xl:text-left'}`}
			>
				{price.text}
			</p>
			{incomingBest && (
				<span className='absolute top-[4px] xl:top-[11px] right-[15px] xl:right-[19px] text-(--color-yellow) text-[13px] md:text-[16px] xl:text-[22px] font-medium leading-[1.3]'>
					хит!
				</span>
			)}
		</li>
	);
}
