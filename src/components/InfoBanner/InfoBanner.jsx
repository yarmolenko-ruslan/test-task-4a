export function InfoBanner({ className = '', children }) {
	return (
		<div
			role='note'
			className={`info-banner rounded-[16px] xl:rounded-[20px] py-[15px] xl:py-4.5 pl-[42px] xl:pl-13 pr-[30px] md:pr-[48px] xl:pr-4.5 relative mb-[16px] md:mb-[22px] xl:mb-7.5 ${className}  bg-(--background-price)`}
		>
			<p className='text-[12px] xl:text-[16px] leading-[1.3]'>{children}</p>
		</div>
	);
}
