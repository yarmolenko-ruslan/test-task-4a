export function Footer({ days }) {
	return (
		<footer className='max-w-304 mx-auto my-0 border border-[#484D4E] rounded-[30px] p-5 mb-25'>
			<p className='flex items-center justify-center max-w-115.25 h-17 w-full bg-[#2D3233] rounded-[30px] border border-[#81FE95] text-[#81FE95] font-medium text-[28px] mb-7.5'>
				гарантия возврата {days} дней
			</p>
			<p className='text-[24px] leading-[1.3]'>
				Мы уверены, что наш план сработает для тебя и ты увидишь видимые
				результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
				деньги в течение {days} дней с момента покупки, если ты не получишь
				видимых результатов.
			</p>
		</footer>
	);
}
