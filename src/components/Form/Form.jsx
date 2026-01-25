import { getPrices } from '@/lib/price';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Disclaimer } from '../Disclaimer';
import { InfoBanner } from '../InfoBanner';
import { PriceList } from '../PriceList';

export async function Form() {
	const prices = await getPrices();

	const defaultSelectedPeriod =
		prices.find(p => p.is_best)?.period ?? prices[0]?.period ?? null;
	return (
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
				<Checkbox required={true} name='agreement'>
					Я согласен с{' '}
					<a href='#' className='underline'>
						офертой рекуррентных платежей
					</a>{' '}
					и{' '}
					<a href='#' className='underline'>
						Политикой конфиденциальности
					</a>
				</Checkbox>
				<Button type='submit'>Купить</Button>
				<Disclaimer>
					Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
					денежных средств для получения пожизненного доступа к приложению.
					Пользователь соглашается, что данные кредитной/дебетовой карты будут
					сохранены для осуществления покупок дополнительных услуг сервиса в
					случае желания пользователя.
				</Disclaimer>
			</fieldset>
		</form>
	);
}
