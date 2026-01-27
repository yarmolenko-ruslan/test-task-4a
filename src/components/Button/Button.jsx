export function Button({ type = 'button', className = '', children }) {
	return (
		<button
			type={type}
			className={`group
        relative overflow-hidden 
        xl:max-w-88 w-full text-black rounded-[20px] h-[55px] md:h-[63px] xl:h-16.5 bg-(--color-yellow) cursor-pointer xl:rounded-[20px] text-[18px] xl:text-[20px] font-bold mb-[10px] md:mb-[20px] xl:mb-4 select-none hover:bg-(--color-yellow-two) transition duration-500
        ${className}
      `}
		>
			<span
				aria-hidden='true'
				className='
          pointer-events-none absolute inset-0
          -translate-x-full
          animate-[shimmer_2s_ease-in-out_infinite]
          bg-linear-to-r from-transparent via-white/70 to-transparent
          -skew-x-12
        '
			/>
			<span
				className='relative z-10 inline-block
    transition-transform duration-500 ease-out
    group-hover:scale-[1.1]'
			>
				{children}
			</span>
		</button>
	);
}
