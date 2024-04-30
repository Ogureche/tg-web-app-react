import React from 'react'
import s from './PageCyber.module.css'
import Competitions from './CyberInfoBlock/Competitions'
import useTelegram from '../../hooks/useTelegram'
const PageCyber = () => {
	useTelegram()
	return (
		<div>
			<div className={s.Competitions}>
				<div className={s.header}>
					<p className={s.text}>Киберспорт</p>
				</div>
				<div>
					<div>
						<Competitions
							name='OSU:'
							registration='Регистрация: 31.01-07.02'
							datestart='Дата начала турнира: 26.02'
							mainjudge='Главный судья: Андрей "Ankodo" Копырин'
							link = ' '
						/>
					
						<Competitions
							name='HS:BG Solo:'
							registration='Регистрация: 01.02-07.02'
							datestart='Дата начала турнира: 08.02'
							mainjudge='Главный судья: Санджи "S4NJ1" Локшаев'
							link = ' '
						/>
					
						<Competitions
							name='League of Legends:'
							registration='Регистрация: 05.02-04.04'
							datestart='Дата начала турнира: 05.04'
							mainjudge='Главный судья: Максим "qqOsir1s" Окороков'
							link = ' '
						/>
					
					
						<Competitions
							name='CS2:'
							registration='Регистрация: 08.02-14.02'
							datestart='Дата начала турнира: 15.02'
							mainjudge='Главный судья: Филипп "Voken" Бронин'
							link = ' '
						/>
					</div>
					<div>
						<Competitions
							name='Dota 2:'
							registration='Регистрация: 22.02-28.02'
							datestart='Дата начала турнира: 29.02'
							mainjudge='Главный судья: Фелиция "REeHa" Гербольдт'
							link = ' '
						/>
					
						<Competitions
							name='Valorant:'
							registration='Регистрация: 29.02-06.03'
							datestart='Дата начала турнира: 07.03'
							mainjudge='Главный судья: Ксения "-sangr1a-" Жданова'
							link = ' '
						/>
					
					
						<Competitions
							name='Фиджитал CS2:'
							registration='Регистрация: 07.03-13.03'
							datestart='Дата начала турнира: 14.03'
							mainjudge='Главный судья: Филипп "Voken" Бронин'
							link = ' '
						/>
					
					
						<Competitions
							name='Fortnite:'
							registration='Регистрация: 07.03-13.03'
							datestart='Дата начала турнира: 14.03-06.04'
							mainjudge='Главный судья:  Алексей "qqLex" Волков'
							link = ' '
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageCyber
