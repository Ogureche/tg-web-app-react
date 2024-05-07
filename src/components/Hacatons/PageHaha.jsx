import React from 'react'
import s from './PageHaha.module.css'
import Hacaton from './Hacaton/Hacaton'
import useTelegram from '../../hooks/useTelegram'
const PageHaha = props => {
	useTelegram()
	return (
		<div className={s.main}>
			<div className={s.header}>
				<p className={s.text}>Хакатоны</p>
			</div>
			<Hacaton
				name_text='Московский туристический хакатон 2024'
				info_data='Даты проведения: с 23 марта - 6 апреля;'
				info_text='Описание: 
Четвертое масштабное соревнование по созданию новых технологических и продуктовых решений для индустрии туризма и гостеприимства с призовым фондом 7 500 000 рублей. Участникам предстоит разработать технологические решения для сервиса планирования путешествий RUSSPASS и компаний-партнеров.'
				info_sum='Программа мероприятия:
31 января - Старт приема заявок;
11 марта - Окончание приема заявок;
23-24 марта - Онлайн-этап;
6-7 апреля - Офлайн-этап в Москве;
Общий призовой фонд - 7 500 000 рублей!
Формат: онлайн/офлайн в г. Москва
Образ результата: презентация идеи внедрения модуля на сервис и верхнеуровневого концепта работы проекта, отрисованного в графическом редакторе.
 Регистрация до 11 марта;'
				link1='https://business.russpass.ru/projects-events/moscow-travel-hack-hakaton/moscow-travel-hack-2024'
				link2='https://translate.yandex.ru/'
			/>
		</div>
	)
}

export default PageHaha
