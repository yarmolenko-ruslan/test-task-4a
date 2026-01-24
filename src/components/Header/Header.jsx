import { CountdownTimer } from '../CountdownTimer';

export const Header = () => {
	return (
		<header>
			<CountdownTimer initialSeconds={2} />
		</header>
	);
};
