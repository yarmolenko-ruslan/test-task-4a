'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import clsx from 'clsx';

export function Checkbox({
	name = 'agreement',
	required = false,
	defaultChecked = false,
	children,
}) {
	const id = useId();
	const [invalid, setInvalid] = useState(false);

	return (
		<label
			htmlFor={id}
			className='flex items-start xl:items-center gap-2.5 xl:gap-3 select-none mb-3.75 md:mb-4.75 xl:mb-4'
		>
			<input
				id={id}
				name={name}
				type='checkbox'
				required={required}
				defaultChecked={defaultChecked}
				className='sr-only peer'
				onInvalid={e => {
					e.preventDefault();
					setInvalid(true);
				}}
				onChange={e => {
					if (e.target.checked) setInvalid(false);
				}}
			/>

			<span
				aria-hidden='true'
				className={clsx(
					'flex h-8 w-8 items-center justify-center rounded-sm border-2 cursor-pointer transition [&_img]:opacity-0 [&_img]:transition-opacity peer-checked:[&_img]:opacity-100',
					{
						'border-red-500': invalid,
						'border-(--color-border-checkbox)': !invalid,
					},
				)}
			>
				<Image src='/check-mark.svg' width={20} height={15} alt='Mark' />
			</span>

			<span className='max-w-63 md:max-w-75 xl:max-w-151.25 text-[12px] leading-[1.2] xl:text-[16px] xl:leading-[1.1] text-[#CDCDCD]'>
				{children}
			</span>
		</label>
	);
}
