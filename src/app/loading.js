export default function Loading() {
	return (
		<>
			<div className='mt-16.5 col-span-3 h-11 rounded-[34px] bg-(--background-price) animate-pulse w-205' />
			<section className='flex justify-between items-center gap-21.75 pt-15 pb-16.5'>
				<div className='w-95.25 h-191.75 bg-(--background-price) rounded-xl animate-pulse' />
				<div className='w-full max-w-150'>
					<div className='grid grid-cols-3 gap-3.5 mb-5'>
						<div className='col-span-3 h-47.5 rounded-[34px] bg-(--background-price) animate-pulse' />
						<div className='h-83.75 rounded-[40px] bg-(--background-price) animate-pulse' />
						<div className='h-83.75 rounded-[40px] bg-(--background-price) animate-pulse' />
						<div className='h-83.75 rounded-[40px] bg-(--background-price) animate-pulse' />
					</div>
					<div className='h-20 rounded-2xl bg-(--background-price) animate-pulse mb-6' />
					<div className='h-10 rounded-xl bg-(--background-price) animate-pulse mb-6' />
					<div className='h-16 rounded-[20px] bg-(--background-price) animate-pulse' />
				</div>
			</section>
			<div className='col-span-3 h-47.5 rounded-[34px] bg-(--background-price) animate-pulse' />
		</>
	);
}
