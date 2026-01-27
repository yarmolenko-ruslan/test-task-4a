import Image from 'next/image';

export function MainImage() {
	return (
		<section className='relative'>
			<Image
				src='/photo.png'
				width={382}
				height={784}
				alt='Спортсмен'
				className='w-24.75 h-50 mx-auto md:w-31 md:h-62.5 xl:w-95.5 xl:h-196'
			/>
			<div className='pointer-events-none absolute left-0 right-0 bottom-0 h-5.25 md:h-6.5 xl:h-28 bg-linear-to-b from-transparent to-(--background)' />
		</section>
	);
}
