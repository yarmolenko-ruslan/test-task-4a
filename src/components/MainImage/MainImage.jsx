import Image from 'next/image';

export function MainImage() {
	return (
		<section className='relative'>
			<Image
				src='/photo.png'
				width={381}
				height={767}
				alt='Спортсмен'
				className='mt-1.25'
			/>
			<div className='pointer-events-none absolute left-0 right-0 bottom-0 h-28 bg-linear-to-b from-transparent to-(--background)' />
		</section>
	);
}
