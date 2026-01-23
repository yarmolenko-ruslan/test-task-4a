import { CountdownTimer } from '@/components/CountdownTimer';
import Header from '@/components/Header/Header';

export default function Home() {
	return (
		<div className=''>
			<CountdownTimer initialSeconds={32} />
			<Header />
			<main className=''></main>
		</div>
	);
}
