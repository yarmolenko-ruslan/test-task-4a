import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

const gilroy = localFont({
	src: [
		{ path: '../fonts/Gilroy-Medium.woff2', weight: '700', style: 'normal' },
	],
	subsets: ['cyrillic', 'latin'],
	variable: '--font-gilroy',
	display: 'swap',
});

export const metadata = {
	title: 'Тарифы',
	description: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru' className={`${montserrat.variable} ${gilroy.variable}`}>
			<body className='text-white bg-(--background) font-(family-name:--font-montserrat)'>
				<Header />
				<main className='max-w-311 mx-auto my-0 px-3.5 pb-16'>{children}</main>
				<Footer days={30} />
			</body>
		</html>
	);
}
