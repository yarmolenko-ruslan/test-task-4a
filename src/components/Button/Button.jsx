export function Button({ type = 'button', className = '', children }) {
	return (
		<button
			type={type}
			className={`
        relative overflow-hidden
        max-w-88 w-full text-black h-16.5 bg-(--color-yellow) cursor-pointer rounded-[20px]
        text-[20px] font-bold mb-4 select-none
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
			<span className='relative z-10 select-none'>{children}</span>
		</button>
	);
}
