import React from 'react'
import s from '../styles/PageCyber.module.css'

const PageCyber = () => {
	// Ваша логика компонента здесь
	return (
		<div className={s.main}>
			<div className={s.d1}>
				<p className={s.main_text}>Киберспорт </p>
			</div>
			<div className={s.d2}>
				<div className={s.d2_1}>
					<p className={s.namegame}>
						<span>Osu:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация: </span> <span>31.01-7.02</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 26.02
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Андрей <span>"Ankodo" Копырин</span>
					</p>
				</div>
				<div className={s.d2_2}>
					<p className={s.namegame}>
						<span>HS:BG Solo:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 01.02-07.02</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 08.02
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Санджи <span>"S4NJ1" Локшаев</span>
					</p>
				</div>
			</div>
			<div className={s.d2_A}>
				<div className={s.d2_1}>
					<p className={s.namegame}>
						<span>League of Legends:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 05.02-04.04</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 05.04
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Максим <span>"qqOsir1s" Окороков</span>
					</p>
				</div>
				<div className={s.d2_2}>
					<p className={s.namegame}>
						<span>CS2:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 08.02-14.02</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 15.02
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Филипп <span>"Voken" Бронин</span>
					</p>
				</div>
			</div>
			<div className={s.d2_A}>
				<div className={s.d2_1}>
					<p className={s.namegame}>
						<span>Dota 2:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 22.02-28.02</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 29.02
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Фелиция <span>"REeHa" Гербольдт</span>
					</p>
				</div>

				<div className={s.d2_2}>
					<p className={s.namegame}>
						<span>Valorant:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 29.02-06.03</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 07.03
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Ксения <span>"-sangr1a-" Жданова</span>
					</p>
				</div>
			</div>
			<div className={s.d2_A}>
				<div className={s.d2_1}>
					<p className={s.namegame}>
						<span>Фиджитал CS2:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 07.03-13.03</span>
					</p>
					<p className={s.info}>
						<span>Дата начала турнира:</span> 14.03
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Филипп <span>"Voken" Бронин</span>
					</p>
				</div>

				<div className={s.d2_2}>
					<p className={s.namegame}>
						<span>Fortnite:</span>
					</p>
					<p className={s.info}>
						<span> Регистрация:</span> <span> 07.03-13.03</span>
					</p>
					<p className={s.info}>
						<span>Проведение:</span> 14.03-06.04
					</p>
					<p className={s.info}>
						<span>Главный судья:</span> Алексей <span>"qqLex" Волков</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default PageCyber
