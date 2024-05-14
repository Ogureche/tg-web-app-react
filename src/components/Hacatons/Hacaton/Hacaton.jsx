import React from 'react'
import { Link } from 'react-router-dom'
import s from '../PageHaha.module.css'

const Hacaton = props => {
	return (
		<div className={s.hacaton}>
			<div className={s.head}>
				<p className={s.main_text}>{props.name_text}</p>
			</div>
			<div className={s.description}>
				<p className={s.info}>{props.info_data}</p>
				<p className={s.info}>{props.info_text}</p>
				<p className={s.info}>{props.info_sum}</p>
			</div>
			<div className={s.link}>
				<div className={s.link1}>
					<Link to='/CreateGroupHacatons'>
						<button className={s.button1}>Создать команду</button>
					</Link>
				</div>
				<div className={s.link2}>
					<Link to='/CreateGroupHacatons'>
						<button className={s.button2}>Вступить в команду</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hacaton
