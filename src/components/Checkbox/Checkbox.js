'use client';

import Image from 'next/image';
import { useId, useState } from 'react';

export function Checkbox({
	name = 'agreement',
	required = false,
	defaultChecked = false,
	children,
}) {
	const id = useId();
	const [invalid, setInvalid] = useState(false);

	return (
		<label htmlFor={id} className='flex items-center gap-3 select-none mb-4'>
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
				className={`flex h-8 w-8 items-center justify-center rounded-sm border-2 cursor-pointer border-(--color-border-checkbox) transition [&_img]:opacity-0 [&_img]:transition-opacity peer-checked:[&_img]:opacity-100 
					${invalid ? 'border-red-500' : 'border-(--color-border-checkbox)'}`}
				aria-hidden='true'
			>
				<Image src='/check-mark.svg' width={20} height={15} alt='Mark' />
			</span>
			<span className='text-[16px] leading-[1.1] defaultChecked max-w-151.25 text-[#CDCDCD]'>
				{children}
			</span>
		</label>
	);
}
