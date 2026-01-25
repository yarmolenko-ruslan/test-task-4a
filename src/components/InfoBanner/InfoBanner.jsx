export function InfoBanner({ className = '', children }) {
	return (
		<div
			role='note'
			className={`info-banner ${className} relative rounded-[20px] bg-(--background-price) pl-13 pr-4.5 py-4.5 mb-7.5`}
		>
			<p className='text-[16px] leading-[1.3]'>{children}</p>
		</div>
	);
}
