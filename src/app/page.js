import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { Header } from '@/components/Header';
import { MainImage } from '@/components/MainImage';

export default function Home() {
	return (
		<>
			<Header />
			<section className='flex justify-between items-center gap-21.5 pt-14.5 pb-16'>
				<MainImage />
				<Form />
			</section>
			<Footer days={30} />
		</>
	);
}
