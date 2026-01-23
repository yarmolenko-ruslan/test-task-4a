import { Montserrat, Raleway } from 'next/font/google';
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
			<body className='antialiased'>{children}</body>
		</html>
	);
}
