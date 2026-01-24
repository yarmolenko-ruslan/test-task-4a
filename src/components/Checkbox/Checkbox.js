export function Checkbox({ type, required, children }) {
	return (
		<label>
			<input type={type} required={required} />
			<span className='text-sm leading-snug'>{children}</span>
		</label>
	);
}
