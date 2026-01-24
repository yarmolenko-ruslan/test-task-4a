export function PriceItem({ price, selected, incomingBest, onSelect }) {
	const discount = Math.round((1 - price.price / price.full_price) * 100);

	const base =
		'relative border-2 rounded-[40px] bg-(--background-price) cursor-pointer hover:scale-[1.03] transition duration-700 select-none';

	const largeLayout =
		'flex gap-10 items-center col-span-3 col-start-1 max-w-187 h-47.5 rounded-[34px] pl-30.5 pr-20 pt-8.5 pb-7.5';

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
			<span className='absolute top-0 left-12.5 px-2 py-1.25 bg-(--color-red) rounded-bl-lg rounded-br-lg'>
				{discount}%
			</span>
			<div>
				<h3
					className={
						incomingBest
							? 'text-[26px] mb-4 ml-6.25 font-medium leading-6.5'
							: 'text-[26px] mb-4 mx-[22.5px] font-medium leading-6.5'
					}
				>
					{price.period}
				</h3>
				<strong
					className={`text-[50px] font-semibold leading-[1.3] ${
						selected ? 'text-(--color-yellow)' : 'font-white'
					}`}
				>
					{price.price} ₽
				</strong>
				<del className='block text-[#919191] text-[24px] ml-19.5'>
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
