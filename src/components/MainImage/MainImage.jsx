import Image from 'next/image';

export function MainImage() {
	return (
		<section className='relative'>
			<Image
				src='/photo.png'
				width={382}
				height={784}
				alt='Спортсмен'
				className='w-[99px] h-[200px] mx-auto md:w-[124px] md:h-[250px] xl:w-[382px] xl:h-[784px]'
			/>
			<div className='pointer-events-none absolute left-0 right-0 bottom-0 h-[21px] md:h-[26px] xl:h-28 bg-linear-to-b from-transparent to-(--background)' />
		</section>
	);
}
