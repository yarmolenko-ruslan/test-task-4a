import { Montserrat } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const metadata = {
	title: 'Тарифы',
	description: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru' className={montserrat.variable}>
			<body className='text-white bg-(--background)'>
				<Header />
				<main className='max-w-311 mx-auto my-0 px-3.5'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
