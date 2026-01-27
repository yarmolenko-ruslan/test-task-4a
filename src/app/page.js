import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { Header } from '@/components/Header';
import { MainImage } from '@/components/MainImage';

export default function Home() {
	return (
		<>
			<Header />
			<main className='xl:flex xl:justify-between xl:items-center xl:gap-21.5 xl:pt-14.5 xl:pb-[43px]'>
				<MainImage />
				<Form />
			</main>
			<Footer days={30} />
		</>
	);
}
