export function PriceItem({ price, selected, incomingBest, onSelect }) {
	const discount = Math.round((1 - price.price / price.full_price) * 100);

	const base =
		'relative border-2 rounded-[40px] bg-(--background-price) cursor-pointer hover:scale-[1.03] transition duration-700 select-none';

	const largeLayout =
		'flex gap-10 items-center col-span-3 col-start-1 max-w-192 h-48.5 rounded-[34px] pl-30.5 pr-20 pt-[40px] pb-[30px]';

	const normalLayout = 'max-w-60 h-83.75 text-center pt-17.5 px-4.5 pb-5.75';

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
			className={`${base} ${border} ${incomingBest ? largeLayout : normalLayout}`}
		>
			<span className='absolute top-0 left-12.5 w-16.5 h-9.75 px-2 py-1.25 text-[22px] bg-(--color-red) rounded-bl-lg rounded-br-lg font-(family-name:--font-gilroy)'>
				-{discount}%
			</span>
			<div>
				<h3
					className={
						incomingBest
							? 'text-[26px] mb-4.5 ml-5.75 font-medium leading-6.5'
							: 'text-[26px] mb-8.25 mx-[22.5px] font-medium leading-6.5'
					}
				>
					{price.period}
				</h3>
				<strong
					className={`text-[49px] font-semibold leading-none ${selected ? 'text-(--color-yellow)' : 'font-white'}`}
				>
					{price.price} ₽
				</strong>
				<del className='block text-[#919191] text-[24px] leading-[1.2] ml-19.5'>
					{price.full_price} ₽
				</del>
			</div>
			<p
				className={
					incomingBest
						? 'text-[16px] leading-5 max-w-82'
						: 'text-[16px] leading-5 max-w-51 mt-12.5 text-left'
				}
			>
				{price.text}
			</p>
		</li>
	);
}
