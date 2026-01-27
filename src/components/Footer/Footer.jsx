export function Footer({ days }) {
	return (
		<footer className='max-w-304 mx-auto my-0 border border-[#484D4E] rounded-[20px] xl:rounded-[30px] p-3 xl:p-5 mb-12.5 xl:mb-25'>
			<p className='flex items-center justify-center max-w-115.25 md:max-w-73.5 xl:max-w-115.25 h-10.25 md:h-11 xl:h-17 w-full bg-[#2D3233] rounded-[30px] border border-[#81FE95] text-[#81FE95] font-medium text-[16px] md:text-[18px] xl:text-[28px] mb-2.5 xl:mb-7.5'>
				гарантия возврата {days} дней
			</p>
			<p className='text-[13px] md:text-[14px] xl:text-[24px] leading-[1.3]'>
				Мы уверены, что наш план сработает для тебя и ты увидишь видимые
				результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
				деньги в течение {days} дней с момента покупки, если ты не получишь
				видимых результатов.
			</p>
		</footer>
	);
}
