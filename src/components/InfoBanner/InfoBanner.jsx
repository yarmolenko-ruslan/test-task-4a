export function InfoBanner({ className = '', children }) {
	return (
		<div
			role='note'
			className={`info-banner rounded-2xl xl:rounded-[20px] py-3.75 xl:py-4.5 pl-10.5 xl:pl-13 pr-7.5 md:pr-12 xl:pr-4.5 relative mb-4 md:mb-5.5 xl:mb-7.5 bg-(--background-price) ${className}`}
		>
			<p className='text-[12px] xl:text-[16px] leading-[1.3]'>{children}</p>
		</div>
	);
}
