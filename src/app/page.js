import Image from 'next/image';
import { PriceList } from '@/components/PriceList';
import { Checkbox } from '@/components/Checkbox';
import { InfoBanner } from '@/components/InfoBanner';
import { getPrices } from '@/lib/price';

export default async function Home() {
	const prices = await getPrices();

	const defaultSelectedPeriod =
		prices.find(p => p.is_best)?.period ?? prices[0]?.period ?? null;
	return (
		<>
			<h1 className='font-bold text-[40px] py-10.25 tracking-[3.5px]'>
				Выбери подходящий для себя{' '}
				<span className='text-(--color-yellow)'>тариф</span>
			</h1>
			<section className='flex justify-between items-center gap-21.75 pt-15'>
				<Image src='/photo.png' width={381} height={767} alt='Спортсмен' />
				<form>
					<fieldset>
						<PriceList
							prices={prices}
							defaultSelectedPeriod={defaultSelectedPeriod}
						/>
						<InfoBanner className='max-w-124.75'>
							Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
							результат, чем за 1 месяц
						</InfoBanner>
						<Checkbox type='checkbox' required={true}>
							Я согласен с
							<a href='#' className='underline'>
								офертой рекуррентных платежей
							</a>{' '}
							и{' '}
							<a href='#' className='underline'>
								Политикой конфиденциальности
							</a>
						</Checkbox>

						<button type='submit'>Купить</button>
					</fieldset>
				</form>
			</section>
		</>
	);
}
