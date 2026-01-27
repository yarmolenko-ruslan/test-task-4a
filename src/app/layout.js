import { Montserrat, Raleway } from 'next/font/google';
import { Promotion } from '@/components/Promotion';
import localFont from 'next/font/local';
import { PromotionProvider } from '@/providers/PromotionProvider';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

const raleway = Raleway({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-raleway',
});

// Шрифт подключен с файла .woff2 поскольку его нет в 'next/font/google'
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
	description: 'Our gym rates',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='ru'
			className={`${montserrat.variable} ${gilroy.variable} ${raleway.variable}`}
		>
			<body className='text-white bg-(--background) font-(family-name:--font-montserrat)'>
				<PromotionProvider>
					<Promotion />
					<div className='max-w-311 mx-auto my-0 px-3.5'>{children}</div>
				</PromotionProvider>
			</body>
		</html>
	);
}
