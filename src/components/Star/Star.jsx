import Image from 'next/image';

export function Star({ className, isZero, isDanger }) {
	return (
		<Image
			src={`${
				isZero
					? '/star-white.svg'
					: isDanger
						? '/star-red.svg'
						: '/star-yellow.svg'
			}`}
			width={14}
			height={14}
			alt=''
			aria-hidden
			className={className}
		/>
	);
}
