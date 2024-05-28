import React from 'react'
import s from './PageHaha.module.css'
import Hacaton from './Hacaton/Hacaton'
import useTelegram from '../../hooks/useTelegram'
import BurgerMenu from './BurgerMenu.jsx' // Импортируйте бургер-меню
// import axios from "axios"; 
// import { retrieveLaunchParams } from "@tma.js/sdk"; 
// import { useEffect} from "react";


const PageHaha = props => {
	useTelegram()
	// 	// const { initDataRaw } = retrieveLaunchParams();
	// useEffect(() => {
    //     const encryptData = async () => {
    //        	await axios.post(
    //             "http://78.136.223.194:3001/api/auth/login",
				
    //             {
    //                 withCredentials: true,
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `tma user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-3788475317572404878&chat_type=private&auth_date=1709144340&hash=371697738012ebd26a111ace4aff23ee265596cd64026c8c3677956a85ca1827`,
    //                 },
    //             }
    //         );
    //     };
    //     encryptData();
    // }, []);
	return (
		<div className={s.main}>
			<div className={s.header}>
				<p className={s.text}>Хакатоны</p>
				<div className={s.search}>
					<BurgerMenu />
				</div>
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
