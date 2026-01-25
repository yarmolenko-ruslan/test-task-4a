import { Title } from '@/components/Title';
import { MainImage } from '@/components/MainImage';
import { Form } from '@/components/Form';

export default function Home() {
	return (
		<>
			<Title />
			<section className='flex justify-between items-center gap-21.5 pt-14.5'>
				<MainImage />
				<Form />
			</section>
		</>
	);
}
