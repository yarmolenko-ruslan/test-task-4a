export function PriceList() {
	const isBest1 = true;
	const isBest2 = false;
	const isBest3 = false;
	const isBest4 = false;
	return (
		<ul className='grid grid-cols-3 gap-3.5'>
			<li
				className={
					isBest1
						? 'flex gap-10 items-center relative border-2 border-(--color-yellow) col-span-3 col-start-1 max-w-187 h-47.5 rounded-[34px] pl-30.5 pr-20 pt-8.5 pb-7.5 bg-(--background-price)'
						: ''
				}
			>
				<span className='absolute top-0 left-12.5 px-2 py-1.25 bg-(--color-red) rounded-bl-lg rounded-br-lg'>
					-70%
				</span>
				<div>
					<h3 className='text-[26px] mb-4 ml-6.25 font-medium leading-6.5'>
						Навсегда
					</h3>
					<strong className='text-[50px] text-(--color-yellow)  font-semibold leading-[1.3]'>
						5990 ₽
					</strong>
					<del className='block text-[#919191] text-[24px] ml-19.5'>
						18990 ₽
					</del>
				</div>
				<p className='text-[16px] leading-5 max-w-82 inline'>
					Для тех, кто хочет всегда быть в форме и поддерживать здоровье
				</p>
				<span className='absolute top-2.5 right-5 px-2 py-1.25 uppercase font-medium text-[22px] text-(--color-yellow)'>
					Хит!
				</span>
			</li>
			<li
				className={
					isBest2
						? 'flex gap-10 items-center relative border-2 border-(--color-yellow) col-span-3 col-start-1 max-w-187 h-47.5 rounded-[34px] pl-30.5 pr-20 pt-8.5 pb-7.5 bg-(--background-price)'
						: 'relative border-2 border-(--color-border) rounded-[40px] max-w-60 h-83.75 bg-(--background-price)'
				}
			>
				<span className='absolute top-0 left-12.5 px-2 py-1.25 bg-(--color-red) rounded-bl-lg rounded-br-lg'>
					-50%
				</span>
				<h3>3 месяца</h3>
				<p>
					<strong>1990 ₽</strong>
					<del>3990 ₽</del>
				</p>
				<p>Привести тело в порядок</p>
			</li>
			<li
				className={
					isBest3
						? 'flex gap-10 items-center relative border-2 border-(--color-yellow) col-span-3 col-start-1 max-w-187 h-47.5 rounded-[34px] pl-30.5 pr-20 pt-8.5 pb-7.5 bg-(--background-price)'
						: 'relative border-2 border-(--color-border) rounded-[40px] max-w-60 h-83.75 bg-(--background-price)'
				}
			>
				<span className='absolute top-0 left-12.5 px-2 py-1.25 bg-(--color-red) rounded-bl-lg rounded-br-lg'>
					-40%
				</span>
				<h3>1 месяц</h3>
				<p>
					<strong>990 ₽</strong>
					<del>1690 ₽</del>
				</p>
				<p>Чтобы получить первые результаты</p>
			</li>
			<li
				className={
					isBest4
						? 'flex gap-10 items-center relative border-2 border-(--color-yellow) col-span-3 col-start-1 max-w-187 h-47.5 rounded-[34px] pl-30.5 pr-20 pt-8.5 pb-7.5 bg-(--background-price)'
						: 'relative border-2 border-(--color-border) rounded-[40px] max-w-60 h-83.75 bg-(--background-price)'
				}
			>
				<span className='absolute top-0 left-12.5 px-2 py-1.25 bg-(--color-red) rounded-bl-lg rounded-br-lg'>
					-30%
				</span>
				<h3>1 неделя</h3>
				<p>
					<strong>690 ₽</strong>
					<del>990 ₽</del>
				</p>
				<p>Чтобы просто начать</p>
			</li>
		</ul>
	);
}
